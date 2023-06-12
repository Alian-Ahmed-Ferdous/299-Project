require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const artistRoutes = require('./routes/artist')
const albumRoutes = require('./routes/album')
const trackRoutes = require('./routes/track')
const playlistRountes = require('./routes/playlist') 
const userRountes = require('./routes/user')

// express app
const app = express()

app.use(
  cors({
    origin:"http://localhost:3000"
  })
)

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path)
  next()
})

// routes
app.use('/api/artists', artistRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/tracks', trackRoutes)
app.use('/api/playlist', playlistRountes)
app.use('/api/user', userRountes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    
  }) 