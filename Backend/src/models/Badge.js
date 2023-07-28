const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Badge = sequelize.define('badges', {
    idBadge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    moviesSeen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'badges'
  });

module.exports = Badge;
  
  
  
  
  