const mongoose = require('mongoose');
const Conductor = require('./Conductor');
const Usuarios = require('./Usuarios');


const URL = 'mongodb+srv://admin:Evangelion-02@cluster0-e1b5n.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL, (err) => {
    if (!err) console.log('conexion exitosa');
    else console.log(err);
});

module.exports = {
    Conductor, Usuarios
};