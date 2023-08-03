const { Schema } = require('mongoose')
const movieSchema = new Schema(
    {
        actors: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Actor',
                required: true
            }
        ],
        title: { type: String, required: true },
        director: [
            {
                 type: String, 
                 required: true 
            }
        ],
        runtime: { type: String, required: true },
        rating: { type: String, required: false },
        score: { type: Number, required: false },
        year_released: { type: String, required: true },
        budget: { type: String, required: false },
        revenue: { type: String, required: false },
        description: { type: String, required: true },
        reviews: [
            {   type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    },
    { timestamps: true }
)

module.exports = movieSchema