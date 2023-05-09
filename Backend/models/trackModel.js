const mongoose = require('mongoose')

const Schema = mongoose.Schema

const trackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  albumId: {
    type: mongoose.Types.ObjectId,
    ref: 'Album',
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    require: true
  },
  songUrl: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Track', trackSchema)