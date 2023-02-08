const express = require('express');
const app = express(); 
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

// Rutas de los usuarios
const configuraciones = require('./routes/configuraciones_routes')

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());
app.disable('x-power-by');

app.set('port', port);

configuraciones(app)

server.listen(3000, '192.168.133.23' || 'localhost', function() {
    console.log('Aplicacion de Nodejs'+process.pid + ' Inicianda....');
});

app.get('/', (req, res) => {
    res.send('Flutter educativo ruta raiz');
});

app.get('/test', (req, res) => {
    res.send('Flutter educativo ruta de test');
});

module.exports = {
    app: app,
    server: server
}

//ERROR
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});