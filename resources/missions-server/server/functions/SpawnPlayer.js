function SpawnPlayer(client) {
    spawnPlayer(client, [2242, -1261, 24], 0, PlayerData[client.index].iSkinID || 0);
	fadeCamera(client, true);
}