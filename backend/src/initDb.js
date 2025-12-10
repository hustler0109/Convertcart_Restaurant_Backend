// import { pool } from "../db.js";
// import fs from "fs";
// import path from "path";

// export async function initDb() {
//   try {
//     const schema = fs.readFileSync(path.resolve("schema.sql"), "utf8");
//     const seed = fs.readFileSync(path.resolve("seed.sql"), "utf8");

//     await pool.query(schema);
//     await pool.query(seed);

//     console.log("✅ Database initialized");
//   } catch (error) {
//     console.error("❌ DB Init Error:", error);
//   }
// }

import { pool } from "../db.js";
import fs from "fs";
import path from "path";

export async function initDb() {
  try {
    // --- 🚨 IMPORTANT ---
    // Do NOT initialize DB automatically on Railway.
    // Railway already has a clean empty DB.
    // Running schema.sql will DROP tables every deploy.
    // ---------------------
    if (process.env.NODE_ENV === "production") {
      console.log("⏭️ Skipping DB init in production");
      return;
    }

    console.log("🗄️ Initializing local database...");

    const schemaPath = path.resolve("schema.sql");
    const seedPath = path.resolve("seed.sql");

    const schema = fs.readFileSync(schemaPath, "utf8");
    const seed = fs.readFileSync(seedPath, "utf8");

    await pool.query(schema);
    await pool.query(seed);

    console.log("✅ Local database initialized successfully.");
  } catch (error) {
    console.error("❌ DB Init Error:", error);
  }
}
