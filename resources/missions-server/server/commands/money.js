addCommandHandler("money", function (command, parameters, client) {
	if(!parameters) {
		return messageClient('Enter sum! Example: /money 500', client, COLOUR_RED);
	}
	var value = parseInt(parameters);

	triggerNetworkEvent("setMoney", client, value);
});