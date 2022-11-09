const mongoose = require('mongoose')

const DreamSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Dream = mongoose.model('Dream', DreamSchema);

module.exports = Dream;