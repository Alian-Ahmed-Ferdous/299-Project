import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useAudioContext } from '../../hooks/useAudioContext';
import './Album.css'
import { BiHeart } from 'react-icons/bi';
import { useAuthContext } from '../../hooks/useAuthContext';

function Album() {
    const [tracks, setTracks] = useState([])
    const [album, setAlbum] = useState([])
    const {song, dispatch} = useAudioContext();
    
    const {albumId} = useParams()
    
    const {user} = useAuthContext()

    // Get the song's info of the album
    const fetchSong = (albumId) => {
      axios.get(`http://127.0.0.1:4000/api/tracks/album/${albumId}`,{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
        .then((res) => {
          console.log("-------------------------")
          console.log(res.data)
          console.log("-------------------------")
          setTracks(res.data)
          setAlbum(res.data[0].album_id)
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
        if(user){
        fetchSong(albumId)
      }
      },[user])


  return (
    <div>
  <div>
    {tracks ? (
      <div>
        <h1>{album.name}</h1>
        <p> {(album.duration/60).toFixed(0)}mins  {(((album.duration/60).toFixed(0)-(album.duration/60))*60).toFixed(0)}sec</p>
        {tracks.map((track,index) => (
          <div className="track" onClick={() => dispatch({type: 'SET_AUDIO', payload: {song: track.songUrl, name: track.name, album: track.album_id.name, album_id: track.album_id._id, albumImg: track.album_id.albumImg}})}>
            <img src={album.albumImg} />
            <div>
              <p>{track.name}</p>
              <div className="track-duration">
                <div>{(track.duration/60).toFixed(0)}mins  {(((track.duration/60).toFixed(0)-(track.duration/60))*60).toFixed(0)}s</div>
                <BiHeart size={20} style={{padding: "10px 0"}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : null}
  </div>

  </div>
  )
}

export default Album