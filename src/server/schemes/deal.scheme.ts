import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import {User} from "./user.scheme";
import {IsNotEmpty} from "class-validator";

export type DealDocument = HydratedDocument<Deal>;

@Schema()
export class Deal {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    isCompleted: boolean = false;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User"})
    userId: mongoose.Types.ObjectId;
}

export const DealSchema = SchemaFactory.createForClass(Deal);