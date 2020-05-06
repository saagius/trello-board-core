import {
  IsString,
  IsArray,
  IsOptional
} from 'class-validator';
import { Card } from '../interfaces/cards.interface';

export class CreateListDto {
  @IsString()
  public board: string;

  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsOptional()
  @IsArray()
  public cards: Card[];
}