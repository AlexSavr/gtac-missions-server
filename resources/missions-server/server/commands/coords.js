addCommandHandler("coords", function(command, parameters, client) {
    message(`${client.name} coords:, ${client.player.position.x}, ${client.player.position.y} ${client.player.position.z}`, COLOUR_GREEN);
    console.log(`Player: ${client.name} coords:, ${client.player.position.x} ${client.player.position.y} ${client.player.position.z}`);
});
