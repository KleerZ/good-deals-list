import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DealService} from "./deal.service";
import {CreateDealDto} from "../../dtos/deal/create.deal.dto";
import {UpdateDealDto} from "../../dtos/deal/update.deal.dto";
import {Auth} from "../../decorators/auth.decorator";

@Controller('deal')
export class DealController {
    
    constructor(private readonly dealService: DealService) {
        
    }

    @Get()
    getAll(@Query('id') id: number) {
        return this.dealService.findAll(id)
    }

    @Post()
    @Auth()
    add(@Body() createDealDto: CreateDealDto) {
        return this.dealService.create(createDealDto)
    }

    @Delete()
    @Auth()
    delete(@Query('id') id: number) {
        return this.dealService.delete(id)
    }
    
    @Put()
    @Auth()
    update(@Query('id') id: number,
           @Body() userData: UpdateDealDto) {
        return this.dealService.update(id, userData)
    }
}
