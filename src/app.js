import express from 'express';
import productsroutes from './routes/products.routes.js';
import morgan from 'morgan';
//el nommbre del servidor 
const app=express();

//Middlwares
app.use(express.json());
app.use(morgan('dev'));

// Ruta de prueba ← AGREGA ESTA
app.get('/ping', (req, res) => res.json({ ok: true }));

//Routes
app.use(productsroutes);
export default app;

