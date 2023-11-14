import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DealService} from "./deal.service";
import {CreateDealDto} from "../../dtos/deal/create.deal.dto";
import {UpdateDealDto} from "../../dtos/deal/update.deal.dto";

@Controller('deal')
export class DealController {
    
    constructor(private readonly dealService: DealService) {
        
    }

    @Get()
    getAll(@Query('id') id: number) {
        return this.dealService.findAll(id)
    }

    @Post()
    add(@Body() createDealDto: CreateDealDto) {
        return this.dealService.create(createDealDto)
    }

    @Delete()
    delete(@Query('id') id: number) {
        return this.dealService.delete(id)
    }
    
    @Put()
    update(@Query('id') id: number,
           @Body() userData: UpdateDealDto) {
        return this.dealService.update(id, userData)
    }
}
