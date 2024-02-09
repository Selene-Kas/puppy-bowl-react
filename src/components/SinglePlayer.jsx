//import { fetchSinglePlayer } from '../API'
import { useState, useEffect} from 'react';
//import { Routes, Route, useParams } from 'react-router-dom'

const SinglePlayer = () => {
    const [player, setPlayer] = useState([]);

    //useEffect(()=>{
    //    async function getPlayer() {
    //        const playerDetails = await fetchSinglePlayer()
    //        setPlayer(playerDetails)
    //    }
    //    getPlayer()
    //  }, [])

    //fetchSinglePlayer();
    //let {playerId} = useParams();
      
    return (
      
      <div>
          <h1>Single Player </h1>

      </div>
    );
  }

  export default SinglePlayer;