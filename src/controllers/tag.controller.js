import { tagModel } from '../models/tag.model.js';

export const createTag = async (req, res) => {
    try {
        const {name, description} = req.body;
        const newTag = await tagModel.create({
            name,
            description
        });
        res.status(201).json({
            ok: true,
            msg: "La etiqueta ha sido creada exitosamente",
            data: newTag
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al crear la etiqueta"
        });
    }
    res.status(200).json({
        ok: true, msg: "Ocurrión un error al crear la etiqueta"
    })
};

export const getTags = async (req, res) => {
    try {
    const {name, description} = req.body; 
    const tag = await tagModel.findByIdAndUpdate(req.params.id, {name, description}, {new: true});
    if (!tag){
        return res.status(404).json({
            ok: false,
            msg: "Ocurrió un error al buscar la etiqueta"
        });
        res.status(200).json({
            ok: true,
            msg: "la etiqueta ha sido actualizada exitosamente",
        });
    }
    }catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar la etiqueta"
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
            res.status(200).json({
                ok: true, 
                msg: "La etiqueta ha sido eliminada exitosamente",
            });
        }catch (error) {
            res.status(500).json({
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
            res.status(200).json({
                ok: false, 
                msg: "La etiqueta ha sido actualizada exitosamente",
                data: tag
            })
        }catch (error) {
            res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar la etiqueta"
            });
        }
      };

