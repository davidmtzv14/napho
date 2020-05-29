import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetPhotosFilterDto {
  @IsOptional()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  field: string;
}
