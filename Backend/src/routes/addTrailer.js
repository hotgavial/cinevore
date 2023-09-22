const Movie = require('../models/Movie')

module.exports = (app) => {
    app.post('/addTrailer', async (req, res) => {
        try {
            const { trailerLink, idMovie } = req.body;
            const movie = await Movie.findByPk(idMovie);
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            const match = trailerLink.match(/[?&]v=([^&]+)/);
            if (match) {
                const videoId = match[1];
                const transformedLink = `https://www.youtube.com/embed/${videoId}`;
                movie.trailer = transformedLink;
            } else {
                res.status(500).json({ error: "Couldn't find videoId from link sent" });
            }
            await movie.save()
            res.json(movie);
        } catch (error) {
            console.error('Error when registering trailer link :', error);
            res.status(500).json({ error: 'Error when registering trailer link' });
        }
    })
}