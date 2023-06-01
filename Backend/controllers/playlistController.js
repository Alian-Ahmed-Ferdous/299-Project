const Playlist = require('../models/playlistModel')
const mongoose = require('mongoose')

// get all playlist of a user
const getPLaylist = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Playlist'})
  }

  const track = await User.findById(userId).populate('playlists').populate('artist_id', 'name')

  if (!track) {
    return res.status(404).json({error: 'No such Track'})
  }

  res.status(200).json(track)
}

// add track to a playlist of a user
const addToPLaylist = async (req, res) =>{
    User.findOne({ email }, '_id')
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      userId = user._id
    })
    const playlistId = 'your_playlist_id_here';
    const songId = 'your_song_id_here';

    User.findById(userId, (err, user) => {
        if (err) {
        console.error(err);
        } else {
        Playlist.findById(playlistId, (err, playlist) => {
            if (err) {
            console.error(err);
            } else {
            // Add the song to the playlist
            playlist.songs.push(songId);
            playlist.save((err) => {
                if (err) {
                console.error(err);
                } else {
                console.log('Song added to the playlist successfully!');
                console.log('Updated Playlist:', playlist);
                }
            });
            }
        });
        }
    })
}

// add playlist of a user
const addPLaylist = async (req, res) =>{
    const { userId } = req.params;
    const { name } = req.body;

    User.findById(userId, (err, user) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        const playlist = new Playlist({ name, user_id: userId });
        playlist.save((err, savedPlaylist) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        user.playlists.push(savedPlaylist._id);
        user.save((err) => {
            if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
            }

            res.status(200).json({ message: 'Playlist created successfully' });
        });
        });
    });
}

module.exports = {
    getPLaylist,
    addToPLaylist,
    addPLaylist,
  }