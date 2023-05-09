const Track = require('../models/trackModel')
const mongoose = require('mongoose')

// get all Tracks
const getTracks = async (req, res) => {
  const tracks = await Track.find({}).sort({createdAt: -1})

  res.status(200).json(tracks)
}

// get a single Track
const getTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Track'})
  }

  const track = await Track.findById(id)

  if (!track) {
    return res.status(404).json({error: 'No such Track'})
  }

  res.status(200).json(track)
}

// get Tracks of an album
const getTrackOfAlbum = async (req, res) => {
  const { id } = req.params

  const tracks = await Track.find({albumId: id}).sort({createdAt: -1})

  res.status(200).json(tracks)
}

// create a new Track
const createTrack = async (req, res) => {
  const {name, duration, albumId, imgUrl, songUrl} = req.body

  // add to the database
  try {
    const track = await Track.create({ name, duration, albumId, imgUrl, songUrl})
    res.status(200).json(track)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Track
const deleteTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Track'})
  }

  const track = await Track.findOneAndDelete({_id: id})

  if(!track) {
    return res.status(400).json({error: 'No such Track'})
  }

  res.status(200).json(track)
}

// update a Track
const updateTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Track'})
  }

  const track = await Track.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!track) {
    return res.status(400).json({error: 'No such Track'})
  }

  res.status(200).json(track)
}

module.exports = {
  getTracks,
  getTrackOfAlbum,
  getTrack,
  createTrack,
  deleteTrack,
  updateTrack
}