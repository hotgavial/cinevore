const { Movie, Actor, ActorMovie } = require('../models/Associations')

module.exports = (app) => {
    app.get('/api/movie/:id', async (req, res) => {
        const movie = await Movie.findByPk(req.params.id, {
            include: [
                { model: Actor }
            ]
        });
        res.json(movie)
    })
}