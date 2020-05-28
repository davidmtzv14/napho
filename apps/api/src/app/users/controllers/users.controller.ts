import {
  Controller,
  Query,
  Get,
  Param,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { UserEntity } from '../data/user.entity';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard())
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('search')
  getSearchPhotos(@Query('search') search: string): Promise<UserEntity[]> {
    return this.usersService.getSearchUsers(search);
  }

  @Get(':id')
  getPhotoById(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    return this.usersService.getUserById(id);
  }
}
