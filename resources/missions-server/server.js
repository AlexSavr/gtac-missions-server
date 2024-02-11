"use strict";

const db = new module.sqlite.Database("server.db");

var PlayerData = {};
var OnlinePlayers = {};
var ServerReady = false;
var GlobalConfig = {
	NewCharacter: {
		iiSkinID: 3,
		fSpawnX: 2242,
		fSpawnY: -1261,
		fSpawnZ: 24,
		iMoney: 100
	},
	iMaxVehicles: 250
};

bindEventHandler("OnResourceStart", thisResource, (event, resource) => {
	// let car = gta.createVehicle(401, new Vec3(-366.94, 239.359, 20));
	InitDatabase();
	ServerReady = true;
});

// TODO: Transfer to server/commands
addEventHandler("OnPlayerCommand", (event, client, command, params) => {
	if (command === 'skin') {
		client.player.skin = parseInt(params);
	}

	if (command === 'spawn') {
		let coords;
		if(!params) {
			let offset = Math.floor(Math.random() * 2);
			coords = [2242, -1261 + (offset / 2), 24 + offset];
		} else {
			const _params = params.split(' ');
			_params.forEach(param => coords.push(parseInt(param)));
		}

		spawnPlayer(client, coords, 0, 0);
		triggerNetworkEvent("ForPlayerSetWantedLevel", client, client.player.skin || 0);
	}

	if (command === 'coords') {
		message(`${client.name} coords:, ${client.player.position.x}, ${client.player.position.y} ${client.player.position.z}`, COLOUR_GREEN);
		console.log(`Player: ${client.name} coords:, ${client.player.position.x} ${client.player.position.y} ${client.player.position.z}`);
	}

	if (command === 'giveweapon' || command === 'gw') {
		const _params = params.split(' ');
		const weapon = parseInt(_params[0]);
		const ammo = parseInt(_params[1])
		if (!weapon || !ammo) {
			return messageClient('Invalid weaponId or ammo. Example: /gw weaponId ammo', client, COLOUR_RED);
		}

		client.player.giveWeapon(weapon, ammo, true);
	}

	if (command === 'mission') {
		var mission = parseInt(params);
		if(!mission) {
			return messageClient('/mission missionId', client, COLOUR_RED);
		}
		if(mission > 150) {
			return messageClient('Maximum 150!', client, COLOUR_RED);
		}
		if(mission < 9 && mission > 2) {
			return messageClient('This missions is unavailable! Becouse game crashed :(', client, COLOUR_RED);
		}
		triggerNetworkEvent("ForPlayerStartMission", client, mission);
	}
});



function createPlayerDataSlot(playerId, nickName) {
	PlayerData[playerId] = {
		nickName,
		accountID: -1,
		iSkinID: 0,
		iMoney: 0,
		isDead: false,
		iLastMissionID: 0
	};
}
