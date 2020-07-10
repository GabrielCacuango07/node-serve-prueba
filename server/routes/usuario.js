const express = require('express');
const _ = require('underscore');
const Impresora = require('../models/impresora');
const bodyParser = require('body-parser');

const app = express();

app.get('/impresora', function(req, res) {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 3;
    limite = Number(limite);
    Impresora.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, impresoras) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                impresoras
            });
        });
});


app.post('/impresora', function(req, res) {
    let body = req.body;

    let impresora = new Impresora({
        Marca: body.Marca,
        Modelo: body.Modelo,
        Serie: body.Serie,
        Color: bodyParser.Color,
        IP: body.IP,
        Contador: body.Contador,
        Precio: body.Precio
    });
    impresora.save((err, impresoraDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            impresora: impresoraDB
        })
    });




});

//actualizar data no cambia el numero de serie ,contador y marca
app.put('/impresora/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['Modelo', 'Color', 'IP', 'Precio']);

    Impresora.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, impresoraDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }



        res.json({
            ok: true,
            impresora: impresoraDB
        });

    });

});


app.delete('/impresora/:id', function(req, res) {
    let id = req.params.id;

    Impresora.findByIdAndRemove(id, (err, impresoraBorrada) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!impresoraBorrada) {
            return res.status(400).json({
                ok: false,
                err: {
                    mensanje: 'Impresora no encontrada'
                }
            });

        }

        res.json({
            ok: true,
            impresora: impresoraBorrada
        })

    });

});

module.exports = app;