const Review = require('../models/Review')
const verifyToken = require('../middleware/auth')

module.exports = (app) => {
    app.post('/addGrade', verifyToken, async (req, res) => {
        try {
            const { grade, idUser, idMovie } = req.body;
            const newReview = await Review.create({ idMovie: idMovie, idUser: idUser, grade: grade });
            res.status(201).json(newReview);
        } catch (error) {
            console.error('Error when registering new review :', error);
            res.status(500).json({ error: 'Error when registering new review' });
        }
    })
}