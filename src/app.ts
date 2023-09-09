import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import logger from './logger';
import userRoutes from './routes/users';
import sequelize from './database/dbConnection';

const appPort = process.env.APP_PORT;

const app = express();
sequelize.sync({ force: false });

// App Routes
// users
app.use('/api/users', userRoutes);

// App middlewares
app.use(morgan('dev'));
app.use(express.json());

app.listen(appPort, () => {
  logger.info(`Server running on port: ${JSON.stringify(appPort)}`);
});
