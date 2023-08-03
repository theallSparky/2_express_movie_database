const express = require('express')
const Router = express.Router()
const actorController = require('../controllers/actorController')

Router.get('/', actorController.getActors)
Router.get('/:id', actorController.getActorById)



module.exports