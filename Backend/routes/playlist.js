const express = require('express')
const {
    getPLaylist,
    addToPLaylist,
    addPLaylist,
} = require('../controllers/playlistController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all tracks routes
router.use(requireAuth)

// GET all Tracks
router.get('/', getPLaylist)

// GET a single Track
router.get('/:id', addToPLaylist)

// GET a all Track from an Album
router.get('/album/:id', addPLaylist)

module.exports = router