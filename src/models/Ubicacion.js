import { Schema, model } from "mongoose";

const ubicacionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  }
});

export default model("Ubicacion", ubicacionSchema);