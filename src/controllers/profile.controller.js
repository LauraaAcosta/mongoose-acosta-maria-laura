import { Profile } from "../models/profile.model.js";

export const createProfile = async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body);
        res.status(201).json({
            ok: true,
            msg: "El perfil ha sido creado exitosamente",
            data: newProfile
        });
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error interno al crear el perfil"
        });
    }
};


export const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find().populate("user", "username email");
        res.status(200).json({
            ok: true, 
            msg: profiles
        });
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar los perfiles"
        });
    }
};

export const updateProfile = async (req, res) => {
    try{
        const profile = await Profile.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).populate("user", "username email");
        if (!profile){
            return res.status(404).json({
                ok: false,
                msg: "No se encontró el perfil"
            });
        }
        res.status(200).json({
            ok:true, 
            msg: "El perfil se ha actualizado exitosamente",
            data: profile
        })
    } catch (error){
        res.status(500).json({
        ok: false, 
        msg: "El perfil no ha sido encontrado"
        })}
    };