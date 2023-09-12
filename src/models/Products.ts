import sequelize from '../database/dbConnection';
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Users from './Users';
import Categories from './Categories';

const Products = sequelize.define('products', {
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
    comment: 'Name of the product',
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'The unitary price for the product',
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
    comment: "If true the product is active if false is inactive or 'deleted'",
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: 'UUID of a category from the categories table',
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    comment: 'UUID of a user from the users table',
  },
});

export default Products;
