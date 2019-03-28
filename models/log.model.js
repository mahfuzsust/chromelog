const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LogSchema = new Schema({
    email: {type: String, required: true, max: 100},
    host: {type: String, required: true},
    time: {type: Number, required: true},
});

module.exports = mongoose.model('Log', LogSchema);
