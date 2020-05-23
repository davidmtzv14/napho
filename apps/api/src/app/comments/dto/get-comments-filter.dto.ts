import { CommentStatus } from '@napho/data';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetCommentsFilterDto {
  @IsOptional()
  @IsIn([CommentStatus.pending, CommentStatus.approved, CommentStatus.rejected])
  status: CommentStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
