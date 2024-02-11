addCommandHandler("armour", function (command, parameters, client) {
	var value = parseInt(parameters) || 100;
	triggerNetworkEvent("setArmour", client, value);
});