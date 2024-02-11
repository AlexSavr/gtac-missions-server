function InitDatabase() {
    db.query(`CREATE TABLE IF NOT EXISTS accounts (
		accountID INTEGER PRIMARY KEY AUTOINCREMENT,
		nickName varchar(255),
		iSkinID INTEGER,
		iMoney INTEGER,
		isDead INTEGER,
		iLastMissionID INTEGER
	);`);
	db.query(`CREATE TABLE IF NOT EXISTS vehicles (
		iVehID INTEGER PRIMARY KEY AUTOINCREMENT,
		fPosX REAL,
		fPosY REAL,
		fPosZ REAL,
		fRotA REAL,
		iColour1 INT,
		iColour2 INT,
		iColour3 INT,
		iColour4 INT,
		iInterior INT,
		owner varchar(255),
		iModelIndex INT
	);`);
}

function LoadPlayerFromDatabase(playerId, name) {
	const dbIsExists = db.query(`SELECT EXISTS(SELECT 1 FROM accounts WHERE nickName = '${name}');`);

	if(!dbSelectIsExists(dbIsExists)) {
		return false;
	}
	
	const user = db.query(`SELECT accountID, iSkinID, iMoney, isDead, iLastMissionID 
							FROM accounts WHERE nickName = '${name}';`);

	PlayerData[playerId] = {
		...PlayerData[playerId],
		accountID: user[0],
		iSkinID: user[1],
		iMoney: user[2],
		isDead: user[3],
		iLastMissionID: user[4]
	};

	return PlayerData[playerId];
}


function SavePlayerToDatabase(playerId) {
	if(typeof playerId !== 'number') return;

	FetchActualPlayerData(playerId);
	const user = PlayerData[playerId];
	const dbIsExists = db.query(`SELECT COUNT(*) FROM accounts WHERE accountID = ${user.accountID}`);

	try {
	if(dbSelectIsExists(dbIsExists)) {
		const [stringKeys, stringValues] = prepareDataToSQL(user);
		let keys = stringKeys.split(', ');
		let values = stringValues.split(', ');
		let _preparedData = '';

		keys.forEach((key, idx) => {
			if(idx !== 0) _preparedData += ', ';
			_preparedData += `${key} = ${values[idx]}`;
		});

		db.query(`UPDATE accounts SET ${_preparedData}
					WHERE accountID = ${user.accountID}`);
	} else {
		delete user.accountID;
		const [keys, values] = prepareDataToSQL(user);

		db.query(`INSERT INTO accounts (${keys})
					VALUES (${values})`)

		const accountID = db.query(`SELECT accountID FROM accounts WHERE nickName = '${user.nickName}';`);
		PlayerData[playerId].accountID = accountID;
	}
	} catch (e) {
		console.error(`[SAVE USER] ${e}`);
		console.log(`[SAVE USER] Keys of user: ${Object.keys(user)}`);
		return false;
	}
	return true;
}

function dbSelectIsExists(queryResult) {
	return queryResult[0] !== 0;
}

function SaveAllPlayersToDatabase() {
	for(let i = 0 ; i < getPlayerCount(); i++) {
		for(let clientID in OnlinePlayers) {
			const id = parseInt(clientID);
			FetchActualPlayerData(id);
			SavePlayerToDatabase(id);
		}
	}
}

function SaveAllCreatedVehicles() {
	// const dbIsExists = db.query(`SELECT COUNT(*) FROM vehicles WHERE iVehID = ${user.accountID}`);
	return;
}

function prepareDataToSQL(data) {
	let values = '';
	let keys = '';
	let index = 0;

	for (let prop in data) {
		if(index !== 0) {
			values += ', ';
			keys += ', ';
		}
		switch(typeof data[prop]) {
			case 'string':
				values += `'${data[prop]}'`
			break;
			case 'object':
				values += `${JSON.stringify(data[prop])}`
			break;
			default:
				values += `${data[prop]}`
		}
		keys += prop;
		index++;
	}
	return [keys, values];
}