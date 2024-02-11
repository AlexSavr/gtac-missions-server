addEventHandler("onPedSpawn", function(event, ped) {
    if (ped.isType(ELEMENT_PLAYER)) {
	    triggerEvent("onPlayerSpawn", getElementFromId(ped.id), getElementFromId(ped.id));
    }
});

addEventHandler('onPedWasted', function (event, ped, attacker, weapon, piece) {
    if (ped.isType(ELEMENT_PLAYER)) {
	    triggerEvent("onPlayerWasted", getElementFromId(ped.id), getElementFromId(ped.id));
    }
});