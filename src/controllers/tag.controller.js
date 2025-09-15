import { tagModel } from '../models/tag.model.js';

export const createTag = async (req, res) => {
    try {
        const {name, description} = req.body;
        const newTag = await tagModel.create({
            name,
            description
        });
        return res.status(201).json({
            ok: true,
            msg: "La etiqueta ha sido creada exitosamente",
            data: newTag
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al crear la etiqueta"
        });
    }
};

export const getTag = async (req, res)=> {
    try {
        const tag = await tagModel.findById(req.params.id);
        if(!tag){
            return res.status(404).json({
                ok: false, 
                msg: "La etiqueta no ha sido encontrada"
            });
        }
        return res.status(200).json({
            ok: true, 
            msg: tag
        });
    }catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "No se logró encontrar la etiqueta"
        })
    }
};

export const getTags = async (req, res) => {
    try {
    const {name, description} = req.body; 
    const tag = await tagModel.find(req.params.id, {name, description}, {new: true});
    if (tags.length === 0){
        return res.status(200).json({
            ok: true,
            msg: "Esperando a que se agregue la etiqueta"
        });
    }
        return res.status(200).json({
            ok: true,
            msg: tags
        });
    }catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar las etiquetas"
        });
    }
};

      export const deleteTag = async (req, res) => {
        try {
            const tag = await tagModel.findByIdAndDelete(req.params.id);
            if (!tag){
                return res.status(404).json({
                    ok: false,
                    msg: "No se encontró la etiqueta"
                });
            }
            await articleModel.updateMany(
                {tags: tag._id},
                {$pull: {tags: tag._id}}
            );
            return res.status(200).json({
                ok: true, 
                msg: "La etiqueta ha sido eliminada exitosamente",
            });
        }catch (error) {
            return res.status(500).json({
                ok: false, msg: "Ocurrió un error al eliminar la etiqueta"
            })
        }
      };

      export const updateTag = async (req, res) => {
        try{
            const {name, description} = req.body;
            const tag = await tagModel.findByIdAndUpdate (req.params.id, {name, description}, {new:true});
            if (!tag){
                return res.status(404).json({
                    ok: false, 
                    msg: "No se logró encontrar la etiqueta"
                });
            }
            return res.status(200).json({
                ok: false, 
                msg: "La etiqueta ha sido actualizada exitosamente",
                data: tag
            })
        }catch (error) {
            return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar la etiqueta"
            });
        }
      };

