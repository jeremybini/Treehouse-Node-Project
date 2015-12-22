//Problem: We need a simple way to look at a user's badge count and javascript points
//Solution: Use node.js to connect to treehouse's api to get profile info to print out

//require modules
var http = require("http");
var https = require("https");
var printer = require("./printer")

//1. Connect to API URL (http://teamtreehouse.com/username.json)
function get(language, username) {
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
		var body = "";

		//2. Read the data
		response.on('data', function(chunk) {
			body += chunk;
		})

		response.on('end', function(){
			if (response.statusCode === 200) {
				try {
					//3. Parse the data
					var profile = JSON.parse(body);
					
					//Check if lanuage requested exists on treehouse, then print the data
					if (profile.points[language] == undefined) {
						printer.printMessage(username, profile.badges.length, language, profile.points[language], false);
					} else {
						printer.printMessage(username, profile.badges.length, language, profile.points[language], true);
					}
				} catch(error) {
					//Parse error
					printer.printError(error);
				};
			} else {
				printer.printError({message: "There was an error getting the profile for " + username + ". (" +
				http.STATUS_CODES[response.statusCode] + ")" });
			}
		})
	});

	//Connection error
	request.on('error', printer.printError);
}

module.exports.get = get;








