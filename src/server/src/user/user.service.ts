import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User} from "../../schemes/user.scheme";
import {CreateUserDto} from "../../dtos/user/create.user.dto";
import {UpdateUserDto} from "../../dtos/user/update.user.dto";

@Injectable()
export class UserService {
    
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
        
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async find(id: number): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async delete(id: number): Promise<void> {
        await this.userModel.deleteOne({_id: id}).exec();
    }

    async update(id: number, userData: UpdateUserDto) {
        await this.userModel.updateOne({_id: id}, userData).exec()
    }
}
