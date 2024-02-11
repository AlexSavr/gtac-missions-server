addCommandHandler("wanted", function (command, parameters, client) {
	var value = parseInt(parameters) || 0;

	triggerNetworkEvent("setWantedLevel", client, value);
});