import express from 'express';
import searchRoutes from './routes/search.routes.js';
const app = express();
app.use(express.json());
app.use('/search', searchRoutes);
export default app;
