function onTimeToSave() {
    if(!ServerReady) return;
    
    SaveAllPlayersToDatabase();
    SaveAllCreatedVehicles();
}