const Review = require('../models/Review')

module.exports = (app) => {
    app.delete('/deleteReview/:idReview', async (req, res) => {
        try {
            const review = await Review.findByPk(req.params.idReview);
            if (!review) {
                return res.status(404).json({ error: 'Review not found' });
              }
            await review.destroy()
            res.json({message: 'Review successfully deleted'});
        } catch (error) {
            console.error('Error when deleting review :', error);
            res.status(500).json({ error: 'Error when deleting review' });
        }
    })
}