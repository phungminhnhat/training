const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true },
    password: String
});


module.exports = mongoose.model('User', schema);