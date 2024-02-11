addEvent("onPlayerWasted", 2);

function onPlayerWasted(client, pedElement) {
    message(PlayerData[client.index].nickName + ' has died.', client, COLOUR_YELLOW);
    
    SpawnPlayer(client.index);
}

addEventHandler('onPlayerWasted', onPlayerWasted);