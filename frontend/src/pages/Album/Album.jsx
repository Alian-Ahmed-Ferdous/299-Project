import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useAudioContext } from '../../hooks/useAudioContext';
import './Album.css'

function Album() {
    const [tracks, setTracks] = useState([])
    const [album, setAlbum] = useState([])
    const {song, dispatch} = useAudioContext();
    
    const {albumId} = useParams()
    
    // Get the song's info of the album
    const fetchSong = (albumId) => {
      axios.get(`http://127.0.0.1:4000/api/tracks/album/${albumId}`)
        .then((res) => {
          console.log(res.data)
          setTracks(res.data)
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }}
            )
    }

    // Get the album's info of the album
    const fetchAlbum = (albumId) => {
      axios.get(`http://127.0.0.1:4000/api/albums/${albumId}`)
        .then((res) => {
          console.log(res.data)
          setAlbum(res.data)
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }}
            )
    }

    useEffect(() => {
        console.log(albumId)
        fetchSong(albumId)
        fetchAlbum(albumId)
      },[])


  return (
    <div>
    <div>
        {tracks ?
          <div>
            <h1>Name of the Album: {album.name}</h1>
            <h3>`duration of the album: {album.duration}s`</h3>
            {tracks.map((track,index) => {
              return (
                <div onClick={() => dispatch({type: 'SET_AUDIO', payload: track.songUrl})}>
                      <img src={track.imgUrl} style={{ width: '10rem', height: '10rem' }}/>
                      <p style={{fontSize: '1rem'}}>{track.name}</p>
                      duration of the track {track.name}: {track.duration}s
                </div>
              )
            })}
        </div>
            : null}
        </div>
  </div>
  )
}

export default Album