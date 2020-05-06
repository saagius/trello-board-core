import { 
  IsOptional,
  IsString,
  IsArray
} from 'class-validator';
import { Visibility } from '../interfaces/boards.interface';
import { List } from '../interfaces/lists.interface';

export class CreateBoardDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsOptional()
  @IsString()
  public background: string;

  @IsOptional()
  public visibility: Visibility;

  @IsOptional()
  @IsArray()
  public lists: List[];
}