import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt'
import {ConfigService} from "@nestjs/config";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../../schemes/user.scheme";
import {Model} from "mongoose";
import {UserService} from "../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService,
              private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET')
    });
  }
  
  async validate(userId: number) {
    return this.userService.find(userId)
  }
}