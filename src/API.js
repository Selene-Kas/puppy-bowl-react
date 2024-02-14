const cohortName = '2308-acc-et-web-pt-a';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        //console.log(response)
        const json = await response.json();
       // console.log("json:", json)
        return json.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};
//fetchAllPlayers();

//fetch for search bar
export const fetchPlayers = (value) => {
    fetch(`${APIURL}/players`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const result = json.filter((player) => {
        return player && player.name && player.name.toLowerCase().inclues(value);
      })
      console.log(result);
    });
 };

export const fetchSinglePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        //console.log(result.data.player);
        return result.data.player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

//fetchSinglePlayer(4475);

