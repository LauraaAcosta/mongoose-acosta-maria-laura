import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    const { username, email, password, roles } = req.body; 
    try {
        const { username, email, password } = req.body;
        const newUser = await UserModel.create ({
            username,
            email, 
            password
        });
        res.status(201).json({
            ok: true,
            msg: "El usuario ha sido creado exitosamente",
            data: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error interno"
        });
    }
}; 

export const getUsers= async (req, res) => {
    const { username, email, password, roles } = req.body; 
    try {
        const users = await UserModel.find()
        res.status(201).json({
            ok: true,
            msg: users,
        });
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error interno al buscar los usuarios"
        });
    }
}; 

export const getUser = async (req, res) => {
    const { username, email, password, roles } = req.body; 
    try {
        const user = await UserModel.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                ok:false,
                msg: user
            })
        }
        res.status(200).json({
            ok: true,
            msg: users,
        });
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "No se encontró el usuario"
        });
    }
}; 

export const updateUser = async (req, res) => {
    try{
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user){
            return res.status(404).json({
                ok:false,
                msg: "No se encontró el usuario"
            });
        }
        res.status(200).json({
            ok: true,
            msg: "El usuario ha sido actualizado exitosamente",
            data: user
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ocurrió un error interno al actualizar el usuario"
        })
    }
};

export const deleteUser = async (req, res) => {
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id); 
        if(!user){
            return res.status(404).json({
                ok:false,
                msg: "No se encontró el usuario"
            });
        }
        await ProfileModel.finsOneAndDelete({user: req.params.id});
        res.status(200).json({
            ok: true,
            msg: "El usuario ha sido eliminado exitosamente",
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ocurrió un error al eliminar el usuario"
        })
    }
};