import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../../dtos/user/create.user.dto";
import {UpdateUserDto} from "../../dtos/user/update.user.dto";
import {Auth} from "../../decorators/auth.decorator";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
        
    }

    @Get(':id')
    get(@Param('id') id: number) {
        return this.userService.find(id)
    }

    @Get()
    getAll() {
        return this.userService.findAll()
    }

    @Put()
    @Auth()
    update(@Query('id') id: number,
           @Body() userData: UpdateUserDto) {
        return this.userService.update(id, userData)
    }

    @Delete()
    @Auth()
    delete(@Query('id') id: number) {
        return this.userService.delete(id)
    }
}
