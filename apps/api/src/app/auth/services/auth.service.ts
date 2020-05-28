import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthCredentialsDto,
  SignUpCredentialsDto
} from '../dto/auth-credentials.dto';
import { UserRepository } from '../../users/user.repository';
import { User } from '@napho/data';
import { Connection } from 'typeorm';

@Injectable()
export class AuthService {
  private userRepository: UserRepository;
  constructor(
    private jwtService: JwtService,
    private readonly connection: Connection
  ) {
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  async signUp(signUpCredentialsDto: SignUpCredentialsDto): Promise<User> {
    return this.userRepository.signUp(signUpCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const user = await this.validateUserPassword(authCredentialsDto);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { photos, favPhotos, ...payload } = user;
    // const payload = { user };
    const token = await this.jwtService.sign(payload);

    return { ...user, token };
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<User> {
    const { email, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({
      where: [{ email }]
    });

    if (user && (await user.validatePassword(password))) {
      return user;
    } else {
      return null;
    }
  }
}
