import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {IsNotEmpty, Matches} from "class-validator";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Matches(/^@/)
    tag: string

    @IsNotEmpty()
    password: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User"})
    friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);