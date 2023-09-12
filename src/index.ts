import app from './app';
import sequelize from './database/dbConnection';
import 'dotenv/config';
import logger from './logger';

async function main() {
  await sequelize.sync({ force: false });
  const APP_PORT = process.env.APP_PORT;
  app.listen(APP_PORT);
  logger.info(`Server on port ${APP_PORT}`);
}

main();
