const Actor = require('./Actor')
const Movie = require('./Movie')
const ActorMovie = require('./ActorMovie')
const Review = require('./Review')
const User = require('./User')
const Badge = require('./Badge')

Actor.belongsToMany(Movie, { through: ActorMovie, foreignKey: 'idActor' });
Movie.belongsToMany(Actor, { through: ActorMovie, foreignKey: 'idMovie' });

Review.belongsTo(User, {foreignKey: 'idUser'});
Review.belongsTo(Movie, {foreignKey: 'idMovie'})

Movie.hasMany(Review, {foreignKey: 'idMovie'})
User.hasMany(Review, {foreignKey: 'idUser'})

Badge.belongsTo(User, {foreignKey: 'idUser'})
User.hasMany(Badge, {foreignKey: 'idUser'})


module.exports = { Actor, Movie, ActorMovie, Review, User, Badge };