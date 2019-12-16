const mongoose = require('mongoose')
const ConductorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required:true,
    },
    sexo: {
        type: String,
        enum:['F', 'M',],
        required:true,
    },
    nacionalidad:{
        type: String,
        enum: ['MX',],
        required:true,
    },
    codigo_postal: {
        type: String,
        required:true,
    },
    direccion: {
        type: String,
        required:true,
    },
    modelo_de_motocicleta: {
        type: String,
        required:true,
    },
    licencia_de_conducir: {
        type: String,
        required:true,
    },
});

const Conductor = mongoose.model('Conductor', ConductorSchema);
module.exports = Conductor;