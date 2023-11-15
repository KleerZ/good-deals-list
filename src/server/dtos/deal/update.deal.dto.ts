import {IsNotEmpty} from "class-validator";

export class UpdateDealDto {
  @IsNotEmpty()
  name: string
  
  isCompleted: boolean
}