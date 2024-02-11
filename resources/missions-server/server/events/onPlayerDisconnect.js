addEventHandler("OnPlayerDisconnect", (event, client) => {
	message(`Player ${client.name}[${client.index}] disconnected`);
	delete OnlinePlayers[client.index];
    delete PlayerData[client.index];
});