// import app from './src/app.js';
// import { initDb } from './src/initDb.js';

// const startServer = async () => {
//   try {
//     await initDb();
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => console.log(`Server running on ${PORT}`));
//   } catch (err) {
//     console.error("❌ Failed to start server:", err);
//     process.exit(1);
//   }
// };

// startServer();

import app from './src/app.js';
import { initDb } from './src/initDb.js';

async function startServer() {
  if (process.env.INIT_DB === "true") {
    await initDb();
  } else {
    console.log("Skipping DB init");
  }

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
