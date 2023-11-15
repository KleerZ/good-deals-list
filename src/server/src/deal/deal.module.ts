import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {DealController} from "./deal.controller";
import {Deal, DealSchema} from "../../schemes/deal.scheme";
import {DealService} from "./deal.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Deal.name, schema: DealSchema }])],
    controllers: [DealController],
    providers: [DealService],
})
export class DealModule {}