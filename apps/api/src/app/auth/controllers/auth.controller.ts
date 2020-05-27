import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto, SignUpCredentialsDto } from '../dto/auth-credentials.dto';
import { AuthService } from '../services/auth.service';
import { User } from '@napho/data';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) signUpCredentialsDto: SignUpCredentialsDto): Promise<User>  {
    return this.authService.signUp(signUpCredentialsDto);
  }


  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.authService.signIn(authCredentialsDto);
  }
}
