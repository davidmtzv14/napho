import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from '@napho/data';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './services/jwt.strategy';
import { environment } from '@env/environment';
import { UserRepository } from '@api/users/data/user.repository';
import { UsersController } from '@api/users/controllers/users.controller';
import { UsersService } from '@api/users/services/users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || environment.jwt.secret,
      signOptions: { expiresIn: environment.jwt.expiresIn }
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, JwtStrategy, UserRepository, UsersService],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
