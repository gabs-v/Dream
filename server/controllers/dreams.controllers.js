const Dream = require('../models/dreams.models');

module.exports = {
    
    findAllDreams: (req, res) => {
        Dream.find()
        .then((allDreams) => {
            console.log(allDreams)
            res.json(allDreams)
        }) 
        .catch((err) => console.log(err))
    },
    createDream: (req,res) => {
        Dream.create(req.body)
        .then((newDream) => {
            console.log(newDream)
            res.json(newDream)
        })
    }
}