const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model('Product', schema);