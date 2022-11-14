const DreamController = require('../controllers/dreams.controllers')

module.exports = (app) => {
    app.get('/api/dreams', DreamController.findAllDreams)
    app.post('/api/dreams', DreamController.createDream)
    app.put('/api/dreams/:id', DreamController.updateOneDream)
    app.delete('/api/dreams/:id', DreamController.deleteDream)
    app.get('/api/dreams/:id', DreamController.findOneDream)
}