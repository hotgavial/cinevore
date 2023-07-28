const sequelize = require('../db/sequelize');
const Movie = require('../models/Movie')

module.exports = (app) => {
    app.get('/api/movie/:id', async (req, res) => {
        const movie = await Movie.findByPk(req.params.id);
        res.json(movie)
    })
}