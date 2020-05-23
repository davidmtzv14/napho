import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { UserRepository } from '../../users/user.repository';
import { User } from '@napho/data';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const user = await this.userRepository.validateUserPassword(
      authCredentialsDto
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { user };
    const token = await this.jwtService.sign(payload);

    return { ...user, token };
  }
}
