const express = require('express');
const cors = require('cors');
const { Conductor, Usuario } = require('./models/index')
const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
    Conductor
        .find()
        .exec()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.get("/conductor/:id", (req, res) => {
    const id = req.params.id;
    Conductor
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


//*CRUD Usuarios

app.post('/usuario', (req, res) => {
    const newUsuario = Usuario(req.body);
    newUsuario.save((err, usuario) => {
        err
            ? res.status(400).send(err)
            : res.status(201).send(usuario);
    });

});

app.get("/all/usuarios", (req, res) => {
    Usuario
        .find()
        .exec()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.get("/usuario/:id", (req, res) => {
    const id = req.params.id;
    Usuario
        .findById(id)
        .exec()
        .then(result => {
            result
                ? res.send(result)
                : res.status(404).send({ message: "Usuario no encontrado" });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.patch('/cambiar_direccion_usuario/:id', (req, res) => {
    const id = req.params.id
    Usuario.findByIdAndUpdate(id,
        { $set: req.body },
        { new: true }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.post('/add/cc/:idUsuario', (req, res) => {
    const id = req.param.idUsuario;
    Usuario.findByIdAndUpdate(id, {$push: {cc: [req.body.cc]}}, {new: true}).exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(409).send(err)
        });

});

app.listen(PORT, () => { });