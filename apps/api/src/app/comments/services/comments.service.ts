import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentStatus, User } from '@napho/data';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { GetCommentsFilterDto } from '../dto/get-comments-filter.dto';
import { CommentRepository } from '../data/comment.repository';
import { CommentEntity } from '../data/comment.entity';
import { PhotoRepository } from '@api/photos/data/photo.repository';
import { Connection } from 'typeorm';

@Injectable()
export class CommentsService {
  private commentRepository: CommentRepository;
  private photoRepository: PhotoRepository;

  constructor(private readonly connection: Connection) {
    this.commentRepository = this.connection.getCustomRepository(
      CommentRepository
    );
    this.photoRepository = this.connection.getCustomRepository(PhotoRepository);
  }

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
    photoId: number,
    createCommentDto: CreateCommentDto,
    user: Partial<User>
  ): Promise<CommentEntity> {
    const { content } = createCommentDto;
    const photo = await this.photoRepository.findOne({ id: photoId });

    const comment = new CommentEntity();
    comment.content = content;
    comment.photoId = photoId;
    comment.status = CommentStatus.pending;
    comment.user = user;

    photo.comments.push(comment);
    await photo.save();

    return comment;
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
