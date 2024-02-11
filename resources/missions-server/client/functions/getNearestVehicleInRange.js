function GetNearestVehicleInRange(position, distance = 5) {
    const vehicles = getVehicles();
    for (const vehicle of vehicles) {
        if (position.distance(vehicle.position) <= distance) {
            return vehicle;
        }
    }
    return null;
}