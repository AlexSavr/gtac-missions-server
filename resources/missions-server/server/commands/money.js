addCommandHandler("money", function (command, parameters, client) {
	if(!parameters) {
		return messageClient('Enter sum! Example: /money 500', client, COLOUR_RED);
	}
	const value = parseInt(parameters);
	
	SetPlayerMoney(client, value);
});

function SetPlayerMoney(client, sum) {
	PlayerData[client.index].iMoney = sum;
	triggerNetworkEvent("setMoney", client, PlayerData[client.index].iMoney);
}

function IncreasePlayerMoney(client, sum) {
	PlayerData[client.index].iMoney += sum;
	triggerNetworkEvent("setMoney", client, PlayerData[client.index].iMoney);
}

function DecreasePlayerMoney(client, sum) {
	PlayerData[client.index].iMoney -= sum;
	triggerNetworkEvent("setMoney", client, PlayerData[client.index].iMoney);
}