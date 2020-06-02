import User from "../../models/User";
import Album from "../../models/Album";
import Foto from "../../models/Foto"

const Mutation = {
  createUser: async (_, { name, username, password }) => {
    const newUser = new User({ name, username, password });
    return await newUser.save();
  },
  createAlbum: async (_, { titulo, autor,lugar }) => {
    const newColeccion = new Album({ titulo, autor,lugar });
    return await newColeccion.save();
  },
  createFoto: async (_, { nombre, descripcion,album }) => {
    const newFoto = new Foto({ nombre, descripcion,album });
    return await newFoto.save();
  },

};

export default Mutation;