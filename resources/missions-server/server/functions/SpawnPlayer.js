function SpawnPlayer(client, coords) {    
    triggerNetworkEvent("setWantedLevel", client, 0);
    spawnPlayer(client, coords || [2242, -1261, 24], 0, PlayerData[client.index].iSkinID || 0);
	fadeCamera(client, true);
}