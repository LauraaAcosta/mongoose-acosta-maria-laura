import { model, Schema, Types } from "mongoose";

const profileSchema = new Schema({
    user: {
        type: Types.ObjectId, 
        ref: "User", 
        required: true, 
        unique: true
        },
        firstName: {
            type: String, 
            required: true, 
            minlength: 3,
            maxlength:25
        },
        lastName: {
            type: String,
             required: true, 
             minlength: 3,
             maxlength: 35
        }, 
        biography: {
            type: String, 
            maxlength: 200
        }
},{
    versionKey: false, 
    timestamps: false
});

export const ProfileModel = model ("Profile", profileSchema)
