const express = require('express'); // Framework Node.js
const app     = express(); // Instancia de la clase Express
const bodyParser = require('body-parser'); // Capturar datos del body del frontend
const morgan = require('morgan'); // Información petición server

app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); // Recibir datos principales desde el formulario
//app.use(morgan('dev')); // Info de la petición http al server
app.use(bodyParser.json()); // Aceptación del formato json
app.use(morgan('combined'));

// Route

app.use('/api/users', require('./api/users'));

app.listen(app.get('port'), () => console.log(`server running on port ${app.get('port')}`)); // Iniciando servidor
