const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize')

const User = sequelize.define('User', {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });

  module.exports = User;