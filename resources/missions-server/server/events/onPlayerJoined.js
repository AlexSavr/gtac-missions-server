addEventHandler("OnPlayerJoined", (event, client) => {
	message(`Player ${client.name}[${client.index}] connected to the server`);
	OnlinePlayers[client.index] = client;
	console.log(`[OnPlayerJoined] ${client.name}[${client.index}]`);

	CreatePlayerDataSlot(client.index, client.name);
	const userLoaded = LoadPlayerFromDatabase(client.index, client.name);

	if(userLoaded) {
		messageClient(`Your account successful loaded! Hello, ${client.name}!`, client, COLOUR_WHITE);
		triggerNetworkEvent("setMoney", client, userLoaded.iMoney, false);
	} else {
		messageClient(`The name, ${client.name} is NOT registered`, client, COLOUR_WHITE);
		messageClient(`Use /register to create and save an account`, client, COLOUR_WHITE);
		triggerNetworkEvent("setMoney", client, GlobalConfig.NewCharacter.iMoney, false);
	}

	SpawnPlayer(client);
});