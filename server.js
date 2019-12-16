const express = require('express');
const cors = require('cors');
const { Conductor, Usuarios } = require('./models/index')
const PORT = process.env.PORT 
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/hola', (request, response) => {
    response.status(200).send({mensaje: 'hola mundo' })
});

app.post('/conductor', (req, res) => {
    const newConductor = Conductor(req.body);
    newConductor.save((err, conductor) => {
        err
            ? res.status(400).send(err)
            : res.status(201).send(conductor);
    });

});


app.post('/condu', (req, res) => {
    const newConductor = Conductor(req.body);
    newConductor.save((err, conductor) => {
        err
            ? res.status(400).send(err)
            : res.status(201).send(conductor);
    });

});


app.listen(3000, () => {
    console.log('server on poort 3000')
});