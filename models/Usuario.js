const mongoose = require('mongoose')
const UsuarioSchema = mongoose.Schema({
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

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;