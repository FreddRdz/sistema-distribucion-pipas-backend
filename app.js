// Importamos las librerias que instalamos
import express, { json } from 'express';
// Importamos archivos propios
import './src/config/loadEnv.js';

const app = express();

// Middleware
app.use(json());

// Variables de entorno
const PORT = process.env.PORT;

// Puerto al que vamos a utilizar
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
