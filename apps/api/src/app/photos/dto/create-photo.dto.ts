import { IsNotEmpty } from 'class-validator';
import { User } from '@napho/data';

export class CreatePhotoDto {
  @IsNotEmpty()
  imageUrl: string;
}
