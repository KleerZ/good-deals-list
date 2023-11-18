import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtConfig} from "../../config/jwt.config";
import {JwtStrategy} from "./jwt.strategy";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemes/user.scheme";
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: JwtConfig
    })
  ]
})
export class AuthModule {
  
}
