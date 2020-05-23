import { IsNotEmpty } from 'class-validator';
import { Photo } from '@napho/data';

export class CreateCommentDto {
  @IsNotEmpty()
  photo: Partial<Photo>;

  @IsNotEmpty()
  content: string;
}
