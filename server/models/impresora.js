const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let impresoraSchema = new Schema({
    Marca: {
        type: String,
        required: [true, 'La marca es necesaria']
    },
    Modelo: {
        type: String,
        required: [true, 'El modelo es necesaria']
    },
    Serie: {
        type: Number,
        required: [true, 'La serie es necesaria']

    },
    Color: {
        type: Boolean,
        default: false,
        required: false
    },
    IP: {
        type: String,
        required: [true, 'La IP es necesaria']
    },
    Contador: {
        type: Number,
        default: 0,
        required: false
    },
    Precio: {
        type: Number,
        required: [true, 'El precio es necesario']
    }
});

module.exports = mongoose.model('Impresora', impresoraSchema);