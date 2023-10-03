const Review = require('../models/Review')
const verifyToken = require('../middleware/auth')

module.exports = (app) => {
    app.put('/changeGrade/:idReview', verifyToken, async (req, res) => {
        try {
            const review = await Review.findByPk(req.params.idReview);
            if (!review) {
                return res.status(404).json({ error: 'Review not found' });
            }
            const { grade } = req.body;
            review.grade = grade;
            await review.save()
            res.json(review);
        } catch (error) {
            console.error('Error when registering new review :', error);
            res.status(500).json({ error: 'Error when registering new review' });
        }
    })
}