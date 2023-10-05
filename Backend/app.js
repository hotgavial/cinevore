const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors');

require('dotenv').config();

const app = express()
const port = 3000

app
  .use(bodyParser.json())
  .use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

require('./src/routes/getHomePageMovies')(app)

require('./src/routes/findMovieById')(app)

require('./src/routes/register')(app)

require('./src/routes/getUserBadgesForMovie')(app)

require('./src/routes/getReviewForUser')(app)

require('./src/routes/addUserReview')(app)

require('./src/routes/updateUserReview')(app)

require('./src/routes/signIn')(app)

require('./src/routes/addTrailer')(app)


app.listen(port, () => console.log(`Application started on http://localhost:${port}`))