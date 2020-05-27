import { IsNotEmpty, IsArray, IsString, IsOptional } from 'class-validator';

export class CreatePhotoDto {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  tags: string[];

  imageUrl: string;
}
