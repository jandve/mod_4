import sequelize from '../database/dbConnection';
import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import Categories from './Categories';
import Products from './Products';
import { UUID } from 'crypto';

interface Users {
  id: UUID;
  name: string;
  email: string;
  password: string;
  state: boolean;
}

const Users = sequelize.define<Model, Users>('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: false,
    defaultValue: () => uuidv4(),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Invalid Email format',
      },
    },
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
