import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import userRoutes from './routes/users';
import productRoutes from './routes/products';
import categoriesRoutes from './routes/categories';
import unprotectedRoutes from './routes/unprotected';
import { authRequired } from './middlewares/auth';

const app = express();

// App middlewares
app.use(morgan('dev'));
app.use(express.json());

// App Routes
app.use('/api', unprotectedRoutes);
app.use('/api/users', authRequired, userRoutes);
app.use('/api/products', authRequired, productRoutes);
app.use('/api/categories', authRequired, categoriesRoutes);

export default app;
