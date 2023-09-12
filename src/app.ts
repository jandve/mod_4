import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import userRoutes from './routes/users';
import productRoutes from './routes/products';
import categoriesRoutes from './routes/categories';

const app = express();

// App middlewares
app.use(morgan('dev'));
app.use(express.json());

// App Routes
// users
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoriesRoutes);

export default app;
