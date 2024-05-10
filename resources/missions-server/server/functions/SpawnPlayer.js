function SpawnPlayer(client, coords) {
    const defaultCoords = [GlobalConfig.NewCharacter.fSpawnX, 
        GlobalConfig.NewCharacter.fSpawnY, 
        GlobalConfig.NewCharacter.fSpawnZ];    
    triggerNetworkEvent("setWantedLevel", client, 0, false);
    spawnPlayer(client, coords || defaultCoords, 0, PlayerData[client.index].iSkinID || GlobalConfig.NewCharacter.iSkinID);
	fadeCamera(client, true);
}
