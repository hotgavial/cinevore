const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Actor = sequelize.define('Actor', {
    idActor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(25),
      defaultValue: null,
    },
    lastName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    hasBadge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isMale: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    job: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
  }, {
    tableName: 'actors',
    timestamps: false
  });

module.exports = Actor;