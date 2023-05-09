const express = require('express')
const {
  getTracks,
  getTrackOfAlbum, 
  getTrack, 
  createTrack, 
  deleteTrack, 
  updateTrack
} = require('../controllers/trackController')

const router = express.Router()

// GET all Tracks
router.get('/', getTracks)

// GET a single Track
router.get('/:id', getTrack)

// GET a all Track from an Album
router.get('/album/:id', getTrackOfAlbum)

// POST a new Track
router.post('/', createTrack)

// DELETE a Track
router.delete('/:id', deleteTrack)

// UPDATE a Track
router.patch('/:id', updateTrack)

module.exports = router