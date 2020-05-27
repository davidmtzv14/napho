import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@napho/data';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../../users/user.repository';
import { environment } from '@env/environment';
import { Connection } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private userRepository: UserRepository;

  constructor(private readonly connection: Connection) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || environment.jwt.secret
    });
    this.userRepository = this.connection.getCustomRepository(UserRepository);
  }

  async validate({ user }): Promise<Partial<User>> {
    const { email } = user;
    const userFromDatabase = await this.userRepository.findOne({ email });

    if (!userFromDatabase) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
