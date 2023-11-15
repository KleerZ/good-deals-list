import {ConfigService} from "@nestjs/config";
import {JwtModuleOptions} from "@nestjs/jwt";
require('dotenv').config();

export const JwtConfig = async (
  configService: ConfigService
): Promise<JwtModuleOptions> => ({
  secret: process.env.JWT_SECRET || configService.get('JWT_SECRET'),
})