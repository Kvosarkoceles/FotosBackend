import { Schema, model } from "mongoose";

const fotoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  }, 
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default model("Foto", fotoSchema);
