import { Model, Schema, Types } from "mongoose";

const tagSchema = new Schema ({
    name: {
        type: String,
        required: true, 
        unique: true, 
        minlength: 3, 
        maxlength: 25
    },
    description: {
        type: String, 
        minlength: 3, 
        maxlength: 150
    },
},{
    versionKey: false, 
    timestamps: false,
});

export const tagModel = Model ("Tag", tagSchema)