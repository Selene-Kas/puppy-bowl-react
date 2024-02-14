import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { fetchSinglePlayer } from '../API';


const SinglePlayer = (  ) => {
  const { id }= useParams();
  const [player, setPlayer] = useState( );


  useEffect(()=>{
    async function getPlayerDetails() {
        const playerDetails = await fetchSinglePlayer(id);
       setPlayer(playerDetails)
       //console.log(playerDetails)
    }
    getPlayerDetails()
  }, [] )

  const handleClick = () => {
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players/' + player.id, {
      method: 'DELETE'
    }).then(() => {
      alert('Player was deleted with id of '+ player.id);
    })
  }

    return (
      
      <div>
        <h1>Single Player: Id of {id}</h1>
        {player ? (
        <ul className="singlePlayer"> 
          <li>Name: {player.name}</li>
          <li>Breed: {player.breed}</li>
          <li>TeamID: {player.teamId}</li>
          <li>Status: {player.status}</li>
          <li>ID: {player.id}</li>
          <li>CohortId: {player.cohortId}</li>
          <li>CreatedAt: {player.createdAt}</li>
          <li>UpdatedAt: {player.updatedAt}</li>
          <li><img className="puppyImg" src={player.imageUrl} /></li>
          <button onClick={handleClick}> Remove Player </button>
        </ul>
        ): (
          <div>Go back to All Players and select Player first.</div>
        )}
      </div>
    );
  }

export default SinglePlayer;