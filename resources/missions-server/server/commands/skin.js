addCommandHandler("skin", function(command, parameters, client) {
    const iSkinID = parseInt(parameters);
    client.player.skin = iSkinID;
    PlayerData[client.index].iSkinID = iSkinID;
});
