addCommandHandler("spawn", (function(command, parameters, client) {
    let coords;
    if(!parameters) {
        // Offset used for fix spawn in in each other
        let offset = Math.floor(Math.random() * 2);
        coords = [2242, -1261 + offset, 24];
    } else {
        const _params = parameters.split(' ');
        _params.forEach(param => coords.push(parseInt(param)));
    }

    SpawnPlayer(client, coords);
}));
