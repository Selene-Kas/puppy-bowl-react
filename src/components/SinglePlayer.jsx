//import { useState, useEffect} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom'
//import { fetchSinglePlayer } from '../API';

const SinglePlayer = () => {
  //const [player, setPlayer] = useState([]);

  //useEffect(()=>{
  //  async function getPlayerDetails() {
  //      const playerDetails = await fetchSinglePlayer()
  //      setPlayer(playerDetails)
  //  }
  //  getPlayerDetails()
  //}, [])
    
    const { id }= useParams();
    console.log(id);

    //fetchSinglePlayer();
    
      
    return (
      
      <div>
          <h1>Single Player: {id}</h1>
      </div>
    );
  }

  export default SinglePlayer;