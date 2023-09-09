import sequelize from '../database/dbConnection';
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const Categories = sequelize.define('categories', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: false,
    defaultValue: uuidv4(),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: 'UUID of a user from the users table',
  },
});

export default Categories;
