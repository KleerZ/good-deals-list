import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Deal} from "../../schemes/deal.scheme";
import {CreateDealDto} from "../../dtos/deal/create.deal.dto";
import {UpdateUserDto} from "../../dtos/user/update.user.dto";
import {UpdateDealDto} from "../../dtos/deal/update.deal.dto";

@Injectable()
export class DealService {
    constructor(@InjectModel(Deal.name) private dealModel: Model<Deal>) {}

    async create(createDealDto: CreateDealDto): Promise<Deal> {
        const createdDeal = new this.dealModel(createDealDto);
        return createdDeal.save();
    }

    async findAll(id: number): Promise<Deal[]> {
        return this.dealModel.find({userId: id}).exec();
    }

    async delete(id: number): Promise<void> {
        await this.dealModel.deleteOne({_id: id}).exec();
    }

    async update(id: number, userData: UpdateDealDto) {
        await this.dealModel.updateOne({_id: id}, userData).exec()
    }
}
    