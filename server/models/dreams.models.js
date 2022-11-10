const mongoose = require('mongoose')

const DreamSchema = new mongoose.Schema({
    subjectLine: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Dream = mongoose.model('Dream', DreamSchema);

module.exports = Dream;