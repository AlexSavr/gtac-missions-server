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
		vehID INTEGER PRIMARY KEY AUTOINCREMENT,
		fPosX REAL,
		fPosY REAL,
		fPosZ REAL,
		fRotA REAL
	);`);
}

function LoadPlayerFromDatabase(playerId, name) {
	const dbIsExists = db.query(`SELECT EXISTS(SELECT 1 FROM accounts WHERE nickName = '${name}');`);

	if(!dbSelectIsExists(dbIsExists)) {
		return false;
	}
	
	const user = db.query(`SELECT * FROM accounts WHERE nickName = '${name}';`);

	PlayerData[playerId] = user;

	return true;
}


function SavePlayerToDatabase(playerId) {
	const user = PlayerData[playerId];
	console.log(`[USER] ${user.accountID} ${user.nickName}`);
	const dbIsExists = db.query(`SELECT COUNT(*) FROM accounts WHERE accountID = ${user.accountID}`);

	try {
	if(dbSelectIsExists(dbIsExists)) {
		// TODO: Change static insert to dynamic parse user array
		console.log('[UPDATE USER]');
		db.query(`UPDATE accounts
					SET iSkinID = ${user.iSkinID}, iMoney = ${user.iMoney}, 
						isDead = ${user.isDead ? 1 : 0}, iLastMissionID = ${user.iLastMissionID}
					WHERE accountID = ${user.accountID}`);
	} else {
		let newValues = '';
		let keys = '';
		let index = 0;
		delete user.accountID;
		for (let prop in user) {
			if(index !== 0) {
				newValues += ', ';
				keys += ', ';
			}
			switch(typeof user[prop]) {
				case 'string':
					newValues += `'${user[prop]}'`
				break;
				case 'object':
					newValues += `${JSON.stringify(user[prop])}`
				break;
				default:
					newValues += `${user[prop]}`
			}
			keys += prop;
			index++;
		}
		db.query(`INSERT INTO accounts (${keys})
					VALUES (${newValues})`)

		const accountID = db.query(`SELECT accountID FROM accounts WHERE nickName = '${user.nickName}';`);
		PlayerData[playerId].accountID = accountID;
	}
	} catch (e) {
		console.error(`[SAVE USER] Exception: ${e}`);
		return false;
	}
	return true;
}

function dbSelectIsExists(queryResult) {
	return queryResult[0] !== 0;
}