const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({

    brand: String,
    price: Number,
    warranty: Number
});

module.exports = mongoose.model('node-bhupen', productSchema);