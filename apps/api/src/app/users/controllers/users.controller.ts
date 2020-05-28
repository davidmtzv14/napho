import {
  Controller,
  Query,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Patch,
  Put
} from '@nestjs/common';
import { UserEntity } from '../data/user.entity';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '@api/auth/decorators/get-user.decorator';
import { User } from '@napho/data';

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

  @Put('follow/:id')
  followUser(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: Partial<User>
  ): Promise<UserEntity> {
    return this.usersService.followUser(user, id);
  }
}
