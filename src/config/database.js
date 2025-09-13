import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect ("mongodb://127.0.0.1:27017/mongobasico")
        console.log ("Se estableció la conexión de manera exitosa")
    } catch (error) {
        console.log ("Error al conectar con la base de datos", error)
    }
};