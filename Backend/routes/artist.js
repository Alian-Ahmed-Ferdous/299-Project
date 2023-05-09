const express = require('express')
const {
  getArtists, 
  getArtist, 
  createArtist, 
  deleteArtist, 
  updateArtist
} = require('../controllers/artistController')

const router = express.Router()

// GET all Artists
router.get('/', getArtists)

// GET a single Artist
router.get('/:id', getArtist)

// POST a new Artist
router.post('/', createArtist)

// DELETE a Artist
router.delete('/:id', deleteArtist)

// UPDATE a Artist
router.patch('/:id', updateArtist)

module.exports = router