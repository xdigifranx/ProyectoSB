import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { initDatabase } from './database/db.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || ['http://localhost:5173', 'http://localhost:5174']
}));
app.use(express.json());

// Inicializar base de datos
// initDatabase();

// Rutas
app.use('/api', routes);
app.use(express.static('public'));
// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Backend Siempre Bonitas está funcionando' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
