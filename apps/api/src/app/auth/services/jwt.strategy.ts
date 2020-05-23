import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@napho/data';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../../users/user.repository';
import { environment } from '@env/environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || environment.jwt.secret
    });
  }

  async validate(user: Partial<User>): Promise<Partial<User>> {
    const { email } = user;
    const userFromDatabase = await this.userRepository.findOne({
      where: [{ email }]
    });

    if (!userFromDatabase) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
