import { Repository, EntityRepository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentStatus } from '@napho/data';
import { GetCommentsFilterDto } from '../dto/get-comments-filter.dto';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  async getComments(filterDto: GetCommentsFilterDto): Promise<CommentEntity[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('comment');

    if (status) {
      query.andWhere('comment.status = :status', { status });
    }

    if (search) {
      query.andWhere('comment.content LIKE :search', { search: `%${search}%` });
    }

    const comments = await query.getMany();

    return comments;
  }
}
