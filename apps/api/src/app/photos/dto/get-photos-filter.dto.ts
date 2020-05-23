import { Photo } from '@napho/data';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { keys } from 'ts-transformer-keys';

export class GetPhotosFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsIn(keys<Photo>())
  field: string;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order: string;
}
