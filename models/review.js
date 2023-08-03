const { Schema } = require('mongoose')
const reviewSchema = new Schema(
    {
        movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
        score: { type: Number, required: true, min: 0, max: 100 },
        comment: { type: String, required: false, min: 10, max: 1000 }
    },
    { timestamps: true }
)

module.exports = reviewSchema