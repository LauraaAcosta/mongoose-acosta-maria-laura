import { model, Schema, Types } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address:{
            street: {
                type: String, 
                required: true,
            },
            city: {
                type: String, 
                required: true,
            },
            country: {
                type: String, 
                required: true,
            },
        }
    },{
        versionKey: false, 
        timestamps: true,
    });

export const UserModel = model ("User", UserSchema);