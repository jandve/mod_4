import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('module_4_db', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5466,
});
export default sequelize;
