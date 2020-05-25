import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetPhotosFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  field: string;
}
