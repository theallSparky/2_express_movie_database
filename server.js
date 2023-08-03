const express = require('express')
const cors = require('cors')
const PORT = 3003
const db = require('./db')
const app = express()
// const { Product } = require('./models')
const AppRouter = require('./routes/AppRouter')
const { actorController } = require('../controllers/actorController.js')
const { movieController } = require('../controllers/movieController')
const { reviewController } = require('../controllers/reviewController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/', AppRouter)

app.listen(PORT, () => {
    console.log(`express server listening on port ${PORT}`)
})









app.listen(PORT, () => {
    console.log(`express server listening on port ${PORT}`)
})