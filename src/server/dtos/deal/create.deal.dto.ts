import {IsNotEmpty} from "class-validator";

export class CreateDealDto {
  @IsNotEmpty()
  name: string;
  
  userId: string;
}