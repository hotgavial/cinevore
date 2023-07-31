const { Review } = require('../models/Associations');

module.exports = (app) => {
    app.get('/api/review/:idMovie/:idUser', async (req, res) => {
        const review = await Review.findOne({
            where: {
                idUser: req.params.idUser,
                idMovie: req.params.idMovie
            }
        })
        console.log(review)
        res.json(review)
    })
}