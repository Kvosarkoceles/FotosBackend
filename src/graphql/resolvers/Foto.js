import Album from "../../models/Album";

const Foto = {  
    album:async(parent) => {      
       const album = await Album.findOne({_id: parent.album});
       return album 
    }
};

export default Foto;