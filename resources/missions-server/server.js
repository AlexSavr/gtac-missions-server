"use strict";

const db = new module.sqlite.Database("server.db");

var PlayerData = {};
var OnlinePlayers = {};
var ServerReady = false;
var Vehicles = {};
var GlobalConfig = {
	NewCharacter: {
		iSkinID: 23,
		fSpawnX: 2242,
		fSpawnY: -1261,
		fSpawnZ: 24,
		iMoney: 100
	},
	iMaxVehicles: 250
};

bindEventHandler("OnResourceStart", thisResource, (event, resource) => {
	InitDatabase();
	setInterval(onTimeToSave, 2000);
	ServerReady = true;
});
