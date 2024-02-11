addEventHandler("OnPlayerJoined", (event, client) => {
	message(`Player ${client.name}[${client.index}] connected to the server`);
	OnlinePlayers[client.index] = client;
	console.log(`[OnPlayerJoined] ${client.name}[${client.index}]`);

	createPlayerDataSlot(client.index, client.name);
	const accountLoaded = LoadPlayerFromDatabase(client.index, client.name);

	if(accountLoaded) {
		messageClient(`The name, ${client.name} is already registered`, client, COLOUR_WHITE);
		messageClient('Your account successful loaded!', client, COLOUR_WHITE);
	} else {
		messageClient(`The name, ${client.name} is NOT registered`, client, COLOUR_WHITE);
		messageClient(`Use /register to create and save an account`, client, COLOUR_WHITE);
	}

	SpawnPlayer(client);
});