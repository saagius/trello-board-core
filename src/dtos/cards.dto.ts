import { 
  IsString,
  IsBoolean,
  IsOptional
} from 'class-validator';

export class CreateCardDto {
  @IsString()
  public list: string;

  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsOptional()
  @IsBoolean()
  public completed: Boolean;
}