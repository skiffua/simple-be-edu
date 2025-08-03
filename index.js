import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://simple-form-for-edu.netlify.app/'] }))
app.use(express.json());

app.use('/users', usersRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
