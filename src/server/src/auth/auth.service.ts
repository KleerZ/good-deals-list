import {BadRequestException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../../schemes/user.scheme";
import {Model} from "mongoose";
import {UserService} from "../user/user.service";
import {hash, verify} from "argon2";
import {JwtService} from "@nestjs/jwt";

import Str from "@supercharge/strings";
import {RegisterDto} from "../../dtos/auth/register.dto";
import {RefreshTokenDto} from "../../dtos/auth/refresh-token.dto";
import {LoginDto} from "../../dtos/auth/login.dto";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>,
              private readonly userService: UserService,
              private readonly jwtService: JwtService) {

  }

  async login(authDto: LoginDto) {
    const user = await this.validateUser(authDto);
    const tokens = await this.createTokens(user.id)

    return {
      user: {
        id: user.id,
        email: user.email
      },
      ...tokens
    }
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwtService.verifyAsync(refreshToken)

    if (!result)
      throw new UnauthorizedException('Invalid refresh token')

    const user = await this.userService.find(result.id)
    const tokens = await this.createTokens(result.id)

    return {
      user: {
        id: result.id,
        email: user.email
      },
      ...tokens
    }
  }

  async register(authDto: RegisterDto) {
    const oldUser = await this.userModel.exists({email: authDto.email}).exec()

    if (oldUser)
      throw new BadRequestException('User already exists')
    const userData = (await this.userService.create({
      email: authDto.email,
      name: authDto.name,
      tag: Str.uuid(),
      password: await hash(authDto.password)
    }))

    const tokens = await this.createTokens(userData.id)

    return {
      user: {
        id: userData.user.id,
        email: userData.user.email
      },
      ...tokens
    }
  }

  private async createTokens(userId: number) {
    const data = {id: userId}

    const accessToken = this.jwtService.sign(data, {
      expiresIn: '1h',
    })

    const refreshToken = this.jwtService.sign(data, {
      expiresIn: '7d',
    })

    return {accessToken, refreshToken}
  }

  private async validateUser(authDto: LoginDto | RegisterDto) {
    const user = await this.userModel.findOne({email: authDto.email}).exec()

    if (!user)
      throw new NotFoundException('User not found')
    
    const isValid = await verify(user.password, authDto.password)
    
    if (!isValid)
      throw new UnauthorizedException('Invalid password')

    return user
  }
}
