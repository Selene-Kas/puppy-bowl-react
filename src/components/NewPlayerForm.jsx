import { useState } from "react";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState( );
  const [imageUrl, setImageUrl] = useState("");
  const [teamId, setTeamId] = useState(Number);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  const newPlayer = { name, breed, status, imageUrl, teamId }
  console.log(newPlayer);
  fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players', {
  method: 'POST',
  headers: {"Content-Type": "application/json" },
  body: JSON.stringify(newPlayer)
}).then(() => {
  alert('New player added');
})
}

return (
  <>
    <div className="createPlayer">
      
        <h1>New Player Form</h1>
        {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}  >
      <label>
        Name: 
        <input  type="text" value={name} 
        onChange={(e) => {setName(e.target.value)}} />
      </label>
      <label>
        Breed: 
        <input  type="text" value={breed} 
        onChange={(e) => setBreed(e.target.value)}
        />
      </label>
      <label>
        Status:
      <select name="choice" value={status} 
      onChange={(e) => setStatus(e.target.value)}>
        <option value="bench">Bench</option>
        <option value="field">Field</option>
      </select>
      </label>
      <label>
        Image URL:
      <input  type="text" value={imageUrl} 
      onChange={(e) => setImageUrl(e.target.value)}/> 
      </label>
      <label>
        Team ID:
      <input value={teamId} type="number" 
      onChange={(e) => setTeamId(e.target.value)}/> 
      </label>
      <button type="submit" >Add Player</button>
     </form>
    </div>
    </>
  );
}

export default NewPlayerForm;