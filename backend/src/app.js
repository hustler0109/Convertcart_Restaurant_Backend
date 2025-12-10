import express from "express";
import searchRoutes from "./routes/search.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

// API routes
app.use("/search", searchRoutes);

export default app;
