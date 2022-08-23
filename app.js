// Importamos las librerias que instalamos
import express, { json } from 'express';
// Importamos archivos propios
import './src/config/loadEnv.js';
import { connectToDb } from './src/config/db.js';

const app = express();

// Middleware
app.use(json());

// Variables de entorno
const URI_DATABASE = process.env.URI_DATABASE;
const PORT = process.env.PORT;

// Conexión a la base de datos
connectToDb(URI_DATABASE);

// Puerto al que vamos a utilizar
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
