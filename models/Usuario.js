const mongoose = require('mongoose')
const UsuariosSchema = mongoose.Schema({
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
        enum:['F', 'M', 'Prefiero no decirlo'],
        required:true,
    },
    nacionalidad:{
        type: String,
        enum: ['MX',],
    },
    codigo_postal: {
        type: String,
        required:true,
    },
    cc: {
        type: [String],
        required:true,
    },

});

const Usuarios = mongoose.model('Usuarios', UsuariosSchema);
module.exports = Usuarios;