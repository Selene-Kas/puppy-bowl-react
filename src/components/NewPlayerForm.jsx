import { addNewPlayer } from "../API";
import { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom'

function NewPlayerForm() {
  const [name, setName] = useState(" ");
  const [breed, setBreed] = useState(" ");
  const [status, setStatus] = useState(" ");
  const [imageUrl, setImageUrl] = useState(" ");
  const [teamId, setTeamId] = useState( );
  const [newPlayer, setNewPlayer] = useState([]);

  async function handleSubmit(event, name, breed, status, imageUrl, teamId) {
    event.preventDefault();
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players`, {
        method: "POST" ,
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({
          name,
          breed,
          status,
          imageUrl,
          teamId,
      }),
      });
      const json = await response.json();
        if (json.error) {
            throw new Error(json.message);
          }
        init();   
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
    name(" ");
    breed(" ");
    status(" ");
    imageUrl(" ");
    teamId(" ");
  }
 
return (
    <div>
        <h1>New Player Form</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input value={name} 
        onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Breed: 
        <input value={breed} 
        onChange={(e) => setBreed(e.target.value)}
        />
      </label>
      <label>
        Status:
      <select value={status} 
      onChange={(e) => setStatus(e.target.value)}>
        <option>bench</option>
        <option>field</option>
      </select>
      </label>
      <label>
        Image URL:
      <input id="imageUrl" value={imageUrl} 
      onChange={(e) => setImageUrl(e.target.value)}/> 
      </label>
      <label>
        Team ID:
      <input ivalue={teamId} type="number" 
      onChange={(e) => setTeamId(e.target.value)}/> 
      </label>

      <button className="add-player">Add Player</button>
     </form>
    </div>
  );
}

export default NewPlayerForm;