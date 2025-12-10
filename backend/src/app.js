import express from 'express';
import searchRoutes from './routes/search.routes.js';
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend running. Use /search/dishes");
});
app.use('/search', searchRoutes);
export default app;
