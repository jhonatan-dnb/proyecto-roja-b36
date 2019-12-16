const express = require('express');
const cors = require('cors');
const { Conductor, Usuario } = require('./models/index')
const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/hola', (request, response) => {
    response.status(200).send({ mensaje: 'hola mundo' })
});


//*CRUD Conductores

app.post('/conductor', (req, res) => {
    const newConductor = Conductor(req.body);
    newConductor.save((err, conductor) => {
        err
            ? res.status(400).send(err)
            : res.status(201).send(conductor);
    });

});

app.get("/all/conductores", (req, res) => {
    conductor
        .find()
        .exec()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.get("/conductores/:id", (req, res) => {
    const id = req.params.id;
    conductor
        .findById(id)
        .exec()
        .then(result => {
            result
                ? res.send(result)
                : res.status(404).send({ message: "Conductor no encontrado" });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.patch('/cambiar_direccion/:id', (req, res) => {
    const id = req.params.id
    Conductor.findByIdAndUpdate(id,
        { $set: req.body },
        { new: true }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});



app.listen(3000, () => {
    console.log('server on poort 3000')
});