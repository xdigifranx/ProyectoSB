import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3003;

const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
  : ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({ origin: corsOrigins }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', routes);

app.get('/', (_req, res) => {
  res.json({ message: 'Backend Siempre Bonitas está funcionando' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
