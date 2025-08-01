import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
