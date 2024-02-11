addEventHandler("OnPlayerDisconnect", (event, client) => {
	message(`Player ${client.name}[${client.index}] disconnected`);

	SavePlayerToDatabase(client.index);

	delete OnlinePlayers[client.index];
    delete PlayerData[client.index];
});