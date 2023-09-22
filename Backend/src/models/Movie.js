const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize')

const Movie = sequelize.define('Movie', {
  idMovie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  originalTitle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trailer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'movies',
  timestamps: false,
});

module.exports = Movie;