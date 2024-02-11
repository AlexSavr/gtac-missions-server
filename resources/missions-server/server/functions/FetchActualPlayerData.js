function FetchActualPlayerData(playerId) {
    let client = getClient(playerId);
	triggerNetworkEvent("FetchPlayerData", client, client.index);

    return PlayerData[playerId];
}

addNetworkHandler("NewPlayerData", function(event, player) {
    const parsedPlayer = JSON.parse(player);
    if(parsedPlayer) {
        PlayerData[parsedPlayer.clientID].iMoney = parsedPlayer.iMoney;
    } else {
        return null;
    }
});