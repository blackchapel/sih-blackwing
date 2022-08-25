const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    mrp: {
        type: Number,
        required: false
    },
    offeredprice: {
        type: String,
        required: false
    },
    availability: {
        type: Number,
        required: false
    },
    hsncode: {
        type: String,
        required: false
    },
    thumbnail: {
        type: Buffer,
        required: false
    },
    categories: {
        type: [String],
        required: false
    },
    specifications: {
        type: Object,
        required: false
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;