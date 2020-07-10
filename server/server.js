require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/impresora', function(req, res) {
    res.json('get impresora')
});


app.post('/impresora', function(req, res) {
    let body = req.body;
    if (body.Marca === undefined || body.Modelo === undefined || body.Serie === undefined || body.Precio === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Revisar parametros Marca,modelo,numero de serie o precio '
        });
    } else {
        res.json({
            impresora: body
        });

    }


});

//actualizar data no cambia el numero de serie ,contador y marca
app.put('/impresora/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});


app.delete('/impresora', function(req, res) {
    res.json('delete impresora')
})

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto:', process.env.PORT);
});