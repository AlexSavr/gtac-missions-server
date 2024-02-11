addCommandHandler("mission", function (command, parameters, client) {
    const mission = parseInt(parameters);
    if (!mission) {
        return messageClient('/mission missionId', client, COLOUR_RED);
    }
    if (mission > 150) {
        return messageClient('Maximum 150!', client, COLOUR_RED);
    }
    if (mission < 9 && mission > 2) {
        return messageClient('This missions is unavailable! Becouse game crashed :(', client, COLOUR_RED);
    }
    triggerNetworkEvent("ForPlayerStartMission", client, mission);
});
