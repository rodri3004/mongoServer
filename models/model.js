const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    marca: {
        type: String,
        required: [true,"La marca es requerida" ],
    },
    modelo: {
        type: String,
        required: [true,"El modelo es requerido" ],
        unique: true,
    },
    memoria: {
        type: String,
        required: true,
    },
    resolucionCamara: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: [true,"El precio es requerido" ],
    },
});
const Celular = mongoose.model('Celular', storeSchema);

module.exports = {Celular}