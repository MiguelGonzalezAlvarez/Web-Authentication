
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// Directorio público 
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Otras rutas
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));

// No usar el puerto 4200 que ese es para angular
app.listen(process.env.PORT, () => {
    console.log(`Servidor arrancado en puerto ${process.env.PORT}`);
});