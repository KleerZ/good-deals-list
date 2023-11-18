import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string
  
  @IsEmail()
  email: string

  @IsNotEmpty()
  tag: string

  @MinLength(6, {
    message: 'Password must be at least 6 characters long'
  })
  password: string
}