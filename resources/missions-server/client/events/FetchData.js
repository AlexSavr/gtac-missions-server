addNetworkHandler("FetchPlayerData", function (id) {
    const data = {
        clientID: id,
        iMoney: localPlayer.money,
        iHealth: localPlayer.health,
        iArmour: localPlayer.armour,
        aWeapons: localPlayer.weapons
    };
    triggerNetworkEvent("NewPlayerData", JSON.stringify(data));
});