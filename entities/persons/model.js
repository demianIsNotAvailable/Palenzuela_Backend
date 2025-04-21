import mongoose from "mongoose";
const personSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    edad: {
      type: String,
      default: "No Disponible",
    },
    afiliacion: {
      type: String,
      default: "No Disponible",
    },
    descripcion: {
      type: String,
      default: "No Disponible",
    },
    estado: {
      type: String,
      enum: ["Vivo", "Fallecido", "Desconocido"],
      default: "Vivo",
    },
  },
  { versionKey: false, timestamps: true }
);

const Person = mongoose.model("Person", personSchema);

export default Person;
