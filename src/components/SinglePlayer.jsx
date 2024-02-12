import { useState, useEffect} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom'
import { fetchAllPlayers } from '../API';


//const SinglePlayer = ( ) => {
//  const [player, setPlayer] = useState( );
//
//  useEffect(()=>{
//    async function getPlayerDetails(id) {
//        const playerDetails = await fetchSinglePlayer();
//       setPlayer(playerDetails)
//    }
//    getPlayerDetails()
//  }, [] )
const SinglePlayer = ( ) => {
const [players, setPlayers] = useState([]);

useEffect(()=>{
  async function getPlayersList() {
      const playersList = await fetchAllPlayers()
      setPlayers(playersList)
  }
  getPlayersList()
}, [])
const { id }= useParams();
console.log(id);
  
const player = players.find(player => player.id === parseInt(id));
  
  //console.log(player);
  //const { name, breed } = player;
     
    return (
      
      <div>
        
        <h1>Single Player: {id}</h1>
        {player ? (
        <ul> 
          <li>Name: {player.name}</li>
          <li>Breed: {player.breed}</li>
          <li>TeamID: {player.teamId}</li>
          <li>Status: {player.status}</li>
          <li>ID: {player.id}</li>
          <li>CohortId: {player.cohortId}</li>
          <li>CreatedAt: {player.createdAt}</li>
          <li>UpdatedAt: {player.updatedAt}</li>
          <li><img className="puppyImg" src={player.imageUrl} /></li>
        </ul>
        ): (
          <div>Go back to All Players and select Player first.</div>
        )}
      </div>
    );
  }

  export default SinglePlayer;