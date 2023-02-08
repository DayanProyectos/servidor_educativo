const ConfiguracionesController = require('../controllers/configuraciones_controller');

module.exports = (app) => {
    app.get('/api/configuraciones/getAll', ConfiguracionesController.getAll);
    app.get('/api/configuracion/findByUser/:usuario', ConfiguracionesController.findByUser);
    app.post('/api/configuracion/create', ConfiguracionesController.create);
}