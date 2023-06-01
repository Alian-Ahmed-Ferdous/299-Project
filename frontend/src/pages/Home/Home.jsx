import axios from 'axios';
import {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useAudioContext } from '../../hooks/useAudioContext';
import { BiPlus } from 'react-icons/bi';
import './Home.css';
import { useAuthContext } from '../../hooks/useAuthContext';
import { MdQueue } from 'react-icons/md';
import Plane from '../Plane/Plane'

const Dashboard = () => {

  const [tracks, setTracks] = useState([]);
  const {song, dispatch} = useAudioContext();
  const {user} = useAuthContext()
  const [selectedindex, setSelectedindex] = useState(null);
  const buttonRefs = useRef([]);

  const handlePlaylist = (index) => {
    setSelectedindex(index === selectedindex ? null : index);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/api/tracks",{
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    .then((res) => {
      if(user){
        console.log(res.data)
        setTracks(res.data)
      }
    })
  },[user])

  return( 
    <div className="homeContainer">
      {tracks ?
        <div>
          <h1 className="tracks-heading">Trending</h1>
          <div className='tracksContainer'>
          {tracks.map((track,index) => {
            return (
              <div className="track" key={index}>
                <img src={track.album_id.albumImg} onClick={() => dispatch({type: 'SET_AUDIO', payload: {song: track.songUrl, name: track.name, album: track.album_id.name, album_id: track.album_id._id, albumImg: track.album_id.albumImg}})} className="track-image" />
                <div className="track-info-container">
                  <p className="track-name" onClick={() => dispatch({type: 'SET_AUDIO', payload: {song: track.songUrl, name: track.name, album: track.album_id.name, album_id: track.album_id._id, albumImg: track.album_id.albumImg}})}>{track.name}</p>
                  <Link to={`album/${track.album_id._id}`} className="track-image-container">
                    <p>{track.album_id.name}</p>
                  </Link>
                  <span>
                    <BiPlus className="add-track-icon" onClick={() => dispatch({type: 'QUEUE_AUDIO', payload: {song: track.songUrl, name: track.name, album: track.album_id.name, album_id: track.album_id._id, albumImg: track.album_id.albumImg}})}/>
                    <span className="app">
                      <MdQueue size={20} style={{padding: "0 5rem"}} onClick={() => handlePlaylist(index)} ref={(ref) => (buttonRefs.current[index] = ref)}/>
                      {index === selectedindex && <Plane selectedindex={index} />}
                    </span>
                  </span>
                </div>
              </div>
            )
          })}
          </div>
          <h1 className="tracks-heading">Recommanded</h1>
        </div>
          : null}
    </div>
  )
};

export default Dashboard;
