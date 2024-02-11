addCommandHandler("hp", function (command, parameters, client) {
	var value = parseInt(parameters) || 100;
	triggerNetworkEvent("setHealth", client, value);
});
