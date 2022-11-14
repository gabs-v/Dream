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
        .catch((err) => console.log(err))
    },
    findOneDream: (req, res) => {
        Dream.findOne({_id: req.params.id})
        .then((oneDream) => {
            console.log(oneDream)
            res.json(oneDream)
        })
        .catch((err) => console.log(err))
    },
    updateOneDream: (req, res) => {
        Dream.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then((updatedDream) => {
                console.log(updatedDream)
                res.json(updatedDream)
            })
    },
    deleteDream: (req,res) => {
        Dream.deleteOne({_id: req.params.id})
        .then((deletedDream) => {
            console.log(deletedDream)
            res.json(deletedDream)
        })
        .catch((err) => console.log(err))
    }
}