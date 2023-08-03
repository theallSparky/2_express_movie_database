const { Schema } = require('mongoose')
const actorSchema = new Schema(
    {
        first_name: { type: String, required: true },
        middle_name: { type: String, required: false },
        last_name: { type: String, required: true },
        suffix: { type: String, required: false },
        known_credits: { type: Number, required: true },
        age: { type: Number, required: true, min: 0, max: 115 },
        alive: { type: Boolean, required: true },
        gender: { type: String, required: true },
        place_of_birth: { type: String, required: true },
        d_o_birth: { type: String, required: true },
        d_o_death: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = actorSchema