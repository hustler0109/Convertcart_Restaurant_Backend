import { pool } from "../db.js";
import fs from "fs";
import path from "path";

export async function initDb() {
  try {
    const schema = fs.readFileSync(path.resolve("schema.sql"), "utf8");
    const seed = fs.readFileSync(path.resolve("seed.sql"), "utf8");

    await pool.query(schema);
    await pool.query(seed);

    console.log("✅ Database initialized");
  } catch (error) {
    console.error("❌ DB Init Error:", error);
  }
}
