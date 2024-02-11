addCommandHandler("settime", function (command, parameters, client) {
	const _params = parameters.split(' ');

	if(!parameters || !_params[0] || !_params[1]) {
		return messageClient('Usage: /settime {hour} {minute}', client, COLOUR_AQUA);
	}

	gta.time.hour = parseInt(_params[0]);
	gta.time.minute = parseInt(_params[1]);
});