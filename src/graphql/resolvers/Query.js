import User from "../../models/User";
import Album from "../../models/Album";
import Foto from "../../models/Foto";

const Query = {  
  users: async () => {
    return await User.find();
  },
  albums: async () => {
    return await Album.find();
  },
  fotos: async () => {
    return await Foto.find();
  }
};

export default Query;