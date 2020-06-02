import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  lugar: {
    type: String,
    required: false,
  }, 
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default model("Album", albumSchema);
