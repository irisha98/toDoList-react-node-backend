const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    }
})
module.exports = mongoose.model('List', listSchema);