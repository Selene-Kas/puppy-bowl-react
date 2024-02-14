import { fetchAllPlayers } from "../API";
import { React, useState, useEffect } from "react";
//import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";



const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    async function getPlayersList() {
        const playersList = await fetchAllPlayers()
        setPlayers(playersList)
    }
    getPlayersList()
  }, [])
  //fetchAllPlayers();

  const navigate = useNavigate()

  return (
    <div>
      <h1>All Players</h1>
      <form className="searchBar" >
        <input className="inputSearch" placeholder="Type name to search..." 
        ></input>
      </form>

      { players.map(player => {
        return (
            <div key={player.id}>
                <h2>{player.name}</h2>
                <img className="puppyImg" src={player.imageUrl} />
                <button onClick={ () => navigate(`players/${player.id}`) }> Player Details </button>
            </div>
        )
      })
      }
    </div>
  );
}

export default AllPlayers;