import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {RegisterDto} from "../../dtos/auth/register.dto";
import {LoginDto} from "../../dtos/auth/login.dto";
import {RefreshTokenDto} from "../../dtos/auth/refresh-token.dto";

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {

  }

  @Post('login')
  async login(@Body() authDto: LoginDto){
    return this.authService.login(authDto)
  }
  
  @Post('login/access-token')
  async newAccessTokens(@Body() authDto: RefreshTokenDto){
    return this.authService.getNewTokens(authDto.refreshToken)
  }
  
  @Post('register')
  async register(@Body() authDto: RegisterDto){
    return this.authService.register(authDto)
  }
}
