
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAudioContext } from '../../hooks/useAudioContext';
import { BiPlus } from 'react-icons/bi';
import './Home.css'

const Dashboard = () => {

  const [tracks, setTracks] = useState([]);
  const {song, dispatch} = useAudioContext();

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/api/tracks")
    .then((res) => {
      console.log(res.data)
      setTracks(res.data)
    })
  },[])

  return( 
  <div>
    {tracks ?
      <div>
        <h1>tracks</h1>
        {tracks.map((track,index) => {
          return (
            <div>
              <Link to={`album/${track.albumId}`}>
                <img src={track.imgUrl} style={{ width: '10rem', height: '10rem' }}/>
              </Link>
              <p onClick={() => dispatch({type: 'SET_AUDIO', payload: track.songUrl})} style={{fontSize: '1rem'}}>{track.name}</p>
              <BiPlus onClick={() => dispatch({type: 'QUEUE_AUDIO', payload: track.songUrl})}/>
            </div>
          )
        })}
      </div>
        : null}
  </div>)
};

export default Dashboard;
