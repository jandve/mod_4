import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();
const appPort = process.env.APP_PORT;

const app = express();
app.use(express.json());

app.listen(appPort, () => {
  logger.info(`Server running on port: ${JSON.stringify(appPort)}`);
});
