addCommandHandler("giveweapon", _giveWeapon);
addCommandHandler("gw", _giveWeapon);

function _giveWeapon(command, parameters, client) {
    const _params = parameters.split(' ');
    const weapon = parseInt(_params[0]);
    const ammo = parseInt(_params[1])
    if (!weapon || !ammo) {
        return messageClient('Invalid weaponId or ammo. Example: /gw weaponId ammo', client, COLOUR_RED);
    }

    client.player.giveWeapon(weapon, ammo, true);
}
