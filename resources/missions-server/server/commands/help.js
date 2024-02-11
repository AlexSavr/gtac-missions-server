addCommandHandler("missions", function (command, parameters, client) {
	messageClient('---      Missions      ---', client, COLOUR_WHITE);
	messageClient('0,1 Initial; 2-Intro;3-7 Videogames; 8-Pool;9-Lowrider;10-Beefy Baron;11-112-Game line', client, COLOUR_WHITE);
	messageClient('113-Shooting range;114-LS Gym Fight;115-SF Gym Fight;116-LV Gym Fight;117-Trucking;', client, COLOUR_WHITE);
	messageClient('118-Quarry;119-Boat School;120-Bike School;121-Taxi;122-Paramedic;123-Firefighter;', client, COLOUR_WHITE);
	messageClient('124-Vigilante;125-Burglary;126-Train;127-Pimping;128-Blood Ring;129-Arena: Kickstart;', client, COLOUR_WHITE);
	messageClient('130-Beat the Cock;131-Courier;132-Chilliad Challenge;133-STUNT Mission;134-Buy Properties;', client, COLOUR_WHITE);
	messageClient('2PLAYERS: 135-Ram, 136-Bike, 137-Cars, 138-Helicopter, 139-Peds', client, COLOUR_WHITE);
	messageClient('Run-arounds: 140-LS; 141-LV; 142-SF; 143-DE; 144-Co', client, COLOUR_WHITE);
	messageClient('Run-arounds 2PL: 145,146,147,148,149,150', client, COLOUR_WHITE);
});

addCommandHandler("weaponlist", function (command, parameters, client) {
	messageClient('---       Weapons      ---', client, COLOUR_WHITE);
	messageClient('[Hand]     0 - Fist, 1 - Brassknuckle', client, COLOUR_WHITE);
	messageClient('[Meele]    2 - Golfclub, 3 - Nightstick, 4 - Knife,', client, COLOUR_WHITE);
	messageClient('[Meele]    5 - Bat, 6 - Shovel, 7 - Poolstick, 8 - Katana, 9 - Chainsaw', client, COLOUR_WHITE);
	messageClient('[Handguns] 22 - Colt45, 23 - Silenced, 24 - Deagle', client, COLOUR_WHITE);
	messageClient('[Shotguns] 25 - Shotgun, 26 - Sawed-off, 27 - Combat Shotgun', client, COLOUR_WHITE);
	messageClient('[Sub-Machine Guns] 29 - MP5, 32 - Tec-9', client, COLOUR_WHITE);
	messageClient('[Assault Rifles]   30 - AK-47, 31 - M4', client, COLOUR_WHITE);
	messageClient('[Rifles]           33 - Rifle, 34 - Sniper', client, COLOUR_WHITE);
	messageClient('[Heavy]            35 - Rocket Launcher, 36 - Rocket HS,', client, COLOUR_WHITE);
	messageClient('[Heavy]            37 - Flamethrower,38 - Minigun', client, COLOUR_WHITE);
	messageClient('[Special]          46 - Parachute', client, COLOUR_WHITE);
});

addCommandHandler("help", function (command, parameters, client) {
	messageClient('--- AVAILABLE COMMANDS ---', client, COLOUR_WHITE);
	messageClient('/help; /wanted {level}; /armour (value); /hp (value); /veh {vehId}', client, COLOUR_WHITE);
	messageClient('/hp (value); /giveweapon {weaponId} {ammo}; /gw {weaponId} {ammo}', client, COLOUR_WHITE);
	messageClient('/mission {id}; /veh {vehId}; /weaponlist; /money {value}; /settime', client, COLOUR_WHITE);
	messageClient('--------------------------', client, COLOUR_WHITE);
});
