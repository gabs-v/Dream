const DreamController = require('../controllers/dreams.controllers')

module.exports = (app) => {
    app.get('/api/dreams', DreamController.findAllDreams)
    app.post('/api/dreams', DreamController.createDream)
}