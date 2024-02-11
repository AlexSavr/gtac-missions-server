bindEventHandler("OnResourceStart", thisResource, function (event, resource) {

});

addNetworkHandler("ForPlayerStartMission", function (missionId) {
    gta.startMission(missionId);
});

addNetworkHandler("setHealth", function (value) {
    localPlayer.health = value;
    message('Success heal!', COLOUR_GREEN);
});

addNetworkHandler("setArmour", function (value) {
    localPlayer.armour = value;
    message('ARMOOOUR!', COLOUR_GREEN);
});

addNetworkHandler("setMoney", function (value, notify = true) {
    localPlayer.money = value;
    if(notify) {
        message('[Success] You got the money!', COLOUR_GREEN);
    }
});

addNetworkHandler("ClientErrorMessage", function (message) {
    message(`[Error] ${message}`, COLOUR_RED);
});

addNetworkHandler("ClientMessage", function (message) {
    message(message, COLOUR_WHITE);
});

addNetworkHandler("setWantedLevel", function (level, notify = true) {
    localPlayer.wantedLevel = level;
    if(notify) {
        if (level === 0) {
            message('Wanted level cleared!', COLOUR_GREEN);
        } else {
            message('Setted wanted level!', COLOUR_GREEN);
        }
    }
});

// TODO: Replace warpIntoVehicle after answer on issue in https://forum.gtaconnected.com/index.php/topic,407.0.html
addEventHandler("OnKeyDown", function (event, keyCode, scanCode, mod) {
    if (keyCode === SDLK_g) {
        message(`Player want seat. V: ${!!localPlayer.vehicle}`)
        if (!localPlayer.vehicle) {
            const v = GetNearestVehicleInRange(localPlayer.position);
            if (v !== null) {
                localPlayer.warpIntoVehicle(v, 2);
                // localPlayer.enterVehicle(v, false);
            }
        }
    }
})