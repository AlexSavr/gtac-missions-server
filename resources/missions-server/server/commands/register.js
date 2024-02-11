addCommandHandler("register", function (command, parameters, client) {
	const result = SavePlayerToDatabase(client.index);
    if(result) {
        messageClient('Successful registered! Now your account will be automatically saved', client, COLOUR_YELLOW);
    } else {
        messageClient('Something wrong...', client, COLOUR_RED);
    }
});
