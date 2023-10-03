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

Movie.prototype.calculateAverageGrade = async function () {
  const reviews = await this.getReviews();
  if (reviews.length === 0) {
    return null;
  }

  const totalGrade = reviews.reduce((sum, review) => sum + review.grade, 0);
  const averageGrade = totalGrade / reviews.length;

  return averageGrade.toFixed(1);
};

module.exports = Movie;