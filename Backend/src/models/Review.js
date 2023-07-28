const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize')

const Review = sequelize.define('Review', {
    idReview: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idMovie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'reviews',
    timestamps: false,
  });
  
  // Add any associations (if needed) with other models here
  
  module.exports = Review;