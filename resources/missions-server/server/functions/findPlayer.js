function FindPlayerIdByUserName(userName) {
    for (let playerId in OnlinePlayers) {
        if (OnlinePlayers[playerId].userName === userName) {
            return playerId;
        }
    }
    return null;
}