const express = require('express')
const cors = require('cors')
const PORT = 3001
const db = require('./db')
const app = express()
// const { Product } = require('./models')
const AppRouter = require('./routes/AppRouter')