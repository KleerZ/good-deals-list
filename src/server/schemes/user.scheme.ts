import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {IsEmail, IsNotEmpty, Matches} from "class-validator";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    @IsEmail()
    email: string
    
    @Prop({required: true})
    @Matches(/^@/, { message: 'tag must start with @' })
    tag: string

    @Prop({required: true})
    password: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User"})
    friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);