const mongoose = require('mongoose')

const Schema = mongoose.Schema

const albumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  albumImg: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: 'artist',
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Album', albumSchema)