import { pool } from '../db.js';

export const getAllUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createUser = async (req, res) => {
    const { id, name, last_name, phone, card } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO users (id, name, last_name, phone, card) VALUES (?, ?, ?, ?, ?)',
            [id, name, last_name, phone, card]
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
