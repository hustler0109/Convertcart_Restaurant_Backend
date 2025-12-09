import { pool } from '../../db.js';

export const searchDish = async (req, res) => {
    try {
        const { name, minPrice, maxPrice } = req.query;

        if (!name || !minPrice || !maxPrice) {
            return res.status(400).json({
                message: 'Query params required: name, minPrice, maxPrice'
            });
        }

        const sql = `
            SELECT r.id AS restaurantId, r.name AS restaurantName, r.city,
                   m.name AS dishName, m.price AS dishPrice, COUNT(o.id) AS orderCount
            FROM menu_items m
            JOIN restaurants r ON r.id = m.restaurant_id
            LEFT JOIN orders o ON o.menu_item_id = m.id
            WHERE m.name LIKE CONCAT('%', ?, '%')
              AND m.price BETWEEN ? AND ?
            GROUP BY r.id, m.id
            ORDER BY orderCount DESC
            LIMIT 10;
        `;

        const [rows] = await pool.execute(sql, [name, minPrice, maxPrice]);
        return res.json({ restaurants: rows });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
