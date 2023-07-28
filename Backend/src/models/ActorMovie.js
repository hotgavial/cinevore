const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize');

const ActorMovie = sequelize.define('ActorMovie', {
    idActorsMovies: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  }, {
    tableName: 'actors_movies', 
    timestamps: false
  });

module.exports = ActorMovie;