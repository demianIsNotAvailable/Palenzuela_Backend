import mongoose from "mongoose";
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  incidente: {
    type: String,
    default: "Desconocido"
  },
  zona: {
    type: String,
    default: "Desconocido"
  },
  descripcion : {
    type: String,
    default: "Desconocido"
  },
},
{
  timestamps: true,
  versionKey: false
});

const Incident = mongoose.model('Incident', incidentSchema);

export default Incident;
