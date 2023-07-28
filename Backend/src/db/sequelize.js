const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cinevore', "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(_ => console.log("Connexion"))
    .catch(error => console.error(error))
  
module.exports = sequelize