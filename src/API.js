const cohortName = '2308-acc-et-web-pt-a';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        console.log(response)
        const json = await response.json();
        console.log("json:", json)
        return json.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

/**export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        console.log("player:", result.data.player);
        return result.data.players;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
}; **/