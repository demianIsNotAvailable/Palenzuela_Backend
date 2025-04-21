const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sceneSchema = new Schema({
  evento: {
    type: String,
    default: "Desconocido"
  },
  zona: {
    type: String,
    default: "Desconocido"
  },
  fecha: {
    type: Date,
    default: Date.now // stored as native Date (MongoDB stores as ISODate, which is a timestamp)
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

const Scene = mongoose.model('Scene', sceneSchema);

export default Scene;
