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
  fecha: {
    type: Date,
    default: Date.now() // stored as native Date (MongoDB stores as ISODate, which is a timestamp)
  },
  descripcion : {
    type: String,
    default: "Desconocido"
  },
  implicados: [{
    type: Schema.Types.ObjectId,
    ref: 'Person',
    default: []
  }]
});

const Incident = mongoose.model('Incident', incidentSchema);

export default Incident;
