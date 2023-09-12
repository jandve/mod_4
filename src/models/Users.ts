import sequelize from '../database/dbConnection';
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Categories from './Categories';
import Products from './Products';

const Users = sequelize.define('users', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
    comment: "If true the user is active if false is inactive or 'deleted'",
  },
});

//Relations
Users.hasMany(Categories, {
  foreignKey: 'userId',
});

Users.hasMany(Products, {
  foreignKey: 'userId',
});

export default Users;
