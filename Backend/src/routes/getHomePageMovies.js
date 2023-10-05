const { Movie } = require('../models/Associations')

module.exports = (app) => {
    app.get('/api/movie/home-page', async (req, res) => {
        const movies = await Movie.findAll({ limit: 10 });
        console.log(movies)
        const moviesWithAverageGrade = await Promise.all(
            movies.map(async (movie) => {
                const averageGrade = await movie.calculateAverageGrade();
                return {
                    ...movie.toJSON(),
                    averageGrade,
                };
            })
        );
        res.json(moviesWithAverageGrade);
    })
}