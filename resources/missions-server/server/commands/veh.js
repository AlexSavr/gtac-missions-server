addCommandHandler("veh", function (command, parameters, client) {
	var model = parseInt(parameters);
	if(model < 400 || model > 622) {
		return messageClient('Invalid vehicle id! Min 400 and max 622', client, COLOUR_RED);
	}
	var vehicle = gta.createVehicle(model, client.player.position);
	addToWorld(vehicle);
	messageClient('[Successful] Vehicle created!', client, COLOUR_GREEN);
});