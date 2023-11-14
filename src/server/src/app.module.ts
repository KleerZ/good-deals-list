import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserController} from "./user/user.controller";
import {DealController} from "./deal/deal.controller";
import {DealModule} from "./deal/deal.module";
import {UserModule} from "./user/user.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/27017'),
      DealModule,
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
