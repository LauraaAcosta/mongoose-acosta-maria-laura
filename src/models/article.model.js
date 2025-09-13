import { model, Schema, Types } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true, 
        minlength: 3,
        maxlenth: 20
    },
    content: {
        type: String, 
        required: true, 
        minlength: 100
    },
    status: {
        type: String, 
        enum: ["publicado", "archivado"],
        default: "publicado"
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }
},{
    versionKey: false, 
    timestamps: true
});

export const articleModel = model ("Article", articleSchema)