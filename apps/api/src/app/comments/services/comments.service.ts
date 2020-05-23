import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentStatus } from '@napho/data';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { GetCommentsFilterDto } from '../dto/get-comments-filter.dto';
import { CommentRepository } from '../data/comment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from '../data/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentRepository: CommentRepository
  ) {}

  async getComments(filterDto: GetCommentsFilterDto): Promise<CommentEntity[]> {
    return this.commentRepository.getComments(filterDto);
  }

  async getCommentById(id: number): Promise<CommentEntity> {
    const found = await this.commentRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Comment with ID "${id}" not found`);
    }

    return found;
  }

  async createComment(
    createCommentDto: CreateCommentDto
  ): Promise<CommentEntity> {
    return this.commentRepository.createComment(createCommentDto);
  }

  async deleteComment(id: number): Promise<void> {
    const result = await this.commentRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Comment with ID "${id}" not found`);
    }
  }

  async updateCommentStatus(
    id: number,
    status: CommentStatus
  ): Promise<CommentEntity> {
    const comment = await this.getCommentById(id);
    comment.status = status;
    await comment.save();
    return comment;
  }
}
