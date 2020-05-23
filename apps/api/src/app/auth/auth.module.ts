import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from '@napho/data';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './services/jwt.strategy';
import { environment } from '@env/environment';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || environment.jwt.secret,
      signOptions: { expiresIn: environment.jwt.expiresIn }
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtService, PassportModule]
})
export class AuthModule {}
