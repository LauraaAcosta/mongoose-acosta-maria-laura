import { articleModel } from "../models/article.model.js";
import { UserModel} from "../models/user.model.js";
import { tagModel} from "../models/tag.model.js";

export const createArticle = async (req,res) => {
    try{
        const {title, content, author, tags, status} = req.body;
        const user = await UserModel.findById(author);
        if(!user){
            return res.status(404).json({
                ok: false, 
                msg: "Error al intentar encontrar al autor"
            });
        }
        const newArticle = await articleModel.create({
            title,
            content,
            status,
            author,
            tags
        });
        res.status(201).json({
            ok: true,
            msg: "El articulo ha sido creado correctamente",
            data: newArticle
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al crear el artículo"
        })

    }
};
    
export const getArticles = async (req, res) => {
    try {
        const articlers = await articleModel.find()-populate(
            "author", "username email").populate( "tags", "name description"); 
            if (articlers.length === 0){
                return res.status(404).json({
                    ok: true, 
                    msg: "Estado de espera hasta que se agreguen articulos"
                });
                }
                res.status(200).json({
                    ok: true,
                    msg: "No se logró encontrar el articulo",
                    data: articlers
                });
            } catch (error){
                res.status(500).json({
                    ok: false, 
                    msg: "Ocurrió un error al buscar los artículos"
                })
            }
            };

export const updateArticle = async (req, res) => {
    try {
        const article = await articleModel.findByIdAndDelete(req.params.id);
        if(!article){
            return res.status(404).json({
                ok: false, 
                msg: "No se encontró el articulo"
            });
        }
        res.status(200).json({
            ok: false, 
            msg: "El articulo no se ha encontrado"
        }); 
    }catch (error){
    return res.status(500).json({
        ok: false, 
        msg: "Ocurrió un error al actualizar el articulo"
    })
}
};

export const deleteArticle = async (req, res) => {
    try {
        const article = await articleModel.findByIdAndDelete(req.params.id, {isDeleted: true}, {new: true},);
        if (!article){
            return res.status(404).json({
                ok: false,
                msg: "No se logró encontrar el articulo"
            });
        }
        return res.status(200).json({
            ok: true, 
            msg: "El articulo se eliminó exitosamente"
        });
    }catch (error){
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al eliminar el articulo"
        });
        if (article.tags.includes(tagId)){
            return res.status(400).json({
                ok: false,
                msg: "Error al buscar el articulo"
        });
        }if (article.tags.includes(tagId)){
            return res.status(400).json({
                ok: false,
                msg: "El articulo ya tiene esa etiqueta"
            });
        }
        article.tags.push(tagId);
        await article.save();
        return res.status(200).json({
            ok: false,
            msg: "Ocurrió un error al agregar la etiqueta"
        });
    }}
