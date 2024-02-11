function CreatePlayerDataSlot(playerId, nickName) {
	PlayerData[playerId] = {
		nickName,
		accountID: -1,
		iSkinID: 0,
		iMoney: 0,
		isDead: false,
		iLastMissionID: 0
	};
}
