const { Review } = require('../models')
const reviewSchema = require('../models/review')

const getReviews = async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
}

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Actor.findById(id)
        if (!review) throw Error('actor not found')
        res.json(review)
    } catch (e) {
        console.log(e)
        res.send('review not foun')
    }
}

module.exports = {
    getReviews,
    getReviewById
}