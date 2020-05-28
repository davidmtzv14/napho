import { IsNotEmpty, IsString } from 'class-validator';
import { Photo } from '@napho/data';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string;
}
