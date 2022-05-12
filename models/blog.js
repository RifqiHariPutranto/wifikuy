const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    apname: {
        type: String
    },
    apsn: {
        type: String
    },
    apmac: {
        type: String
    },
    aptype: {
        type: String
    },
    witel: {
        type: String
    },
    locid: {
        type: String
    },
    location: {
        type: String
    },
    wac: {
        type: String
    },
    status: {
        type: String
    },
});

const Detail = mongoose.model('Detail', detailSchema);
module.exports = Detail;