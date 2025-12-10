import { pool } from '../db.js';
import fs from 'fs';

export const initDb = async () => {
    const schema = fs.readFileSync('./schema.sql').toString();
    const seed = fs.readFileSync('./seed.sql').toString();

    try {
        await pool.query(schema);
        await pool.query(seed);
        console.log('✅ Database initialized');
    } catch (err) {
        console.error('❌ DB Init Error:', err);
    }
};
