import app from './src/app.js';
import { initDb } from './src/initDb.js';

initDb();  // ← IMPORTANT

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
