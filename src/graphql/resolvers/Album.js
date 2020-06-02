import Foto from "../../models/Foto";

const Album = {  
    fotos:async(parent) => {      
        /* console.log(parent._id); */
        const fotos = await Foto.find({album: parent._id})
        console.log(fotos);
        
        return fotos
       /* const album = await Album.findOne({_id: parent.album});
       return album  */
    }
};

export default Album;