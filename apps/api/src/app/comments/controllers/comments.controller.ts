import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CommentStatus, User } from '@napho/data';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { GetCommentsFilterDto } from '../dto/get-comments-filter.dto';
import { CommentStatusValidationPipe } from '../pipes/comment-status-validation.pipe';
import { CommentEntity } from '../data/comment.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '@api/auth/decorators/get-user.decorator';

@Controller(':photoId/comments')
@UseGuards(AuthGuard())
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  getComments(
    @Query(ValidationPipe) filterDto: GetCommentsFilterDto
  ): Promise<CommentEntity[]> {
    return this.commentsService.getComments(filterDto);
  }

  @Get(':id')
  getCommentById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<CommentEntity> {
    return this.commentsService.getCommentById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createComment(
    @Param('photoId', ParseIntPipe) photoId: number,
    @Body() createCommentDto: CreateCommentDto,
    @GetUser() user: Partial<User>
  ): Promise<CommentEntity> {
    return this.commentsService.createComment(photoId, createCommentDto, user);
  }

  @Delete(':id')
  deleteComment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.commentsService.deleteComment(id);
  }

  @Patch(':id/status')
  updateCommentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', CommentStatusValidationPipe) status: CommentStatus
  ): Promise<CommentEntity> {
    return this.commentsService.updateCommentStatus(id, status);
  }
}
