const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locid: {
        type: String
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    },
});

const Location = mongoose.model('Apdetail', locationSchema);
module.exports = Location;