//Print out message
function printMessage(username, badgeCount, language, points, languageExists) {
	//Start of print message
	var message = username + " has " + badgeCount + " total badges";

	//check if the language requested exists
	if (languageExists) {
		message += " and " + points + " points in " + language + ".";
	} else {
		message += " (" + language + " is not a valid language).";
	}

	//log the message
	console.log(message);
}

//Print out error messages
function printError(error) {
	console.error(error.message);
}

//export print function
module.exports.printMessage = printMessage;
module.exports.printError = printError;