const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    wism1: {
        type: Number
    },
    wism2: {
        type: Number
    },
    wism3: {
        type: Number
    },
    wism4: {
        type: Number
    },
    wism5: {
        type: Number
    },
    wism6: {
        type: Number
    },
    total: {
        type: Number
    }
});

const Wlancount = mongoose.model('wlancount', detailSchema);
module.exports = Wlancount;