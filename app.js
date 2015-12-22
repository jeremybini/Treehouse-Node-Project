var profile = require("./profile");

var language = process.argv[2];
var users = process.argv.slice(3);

users.forEach(function(user) {
	profile.get(language, user);
});



