var database = [
{
	username: "andrei",
	password: "supersecret"
},
{
	username: "sally",
	password: "123"
},
{
	username: "ingrid",
	password: "777"
},

];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from all the learning"
},

{
	username: "Sally",
	timeline: "JavaScript is so cool"
},

{
	username: "Mitch",
	timeline: "JavaScript is pretty cool"
}

];

function isUserValid(username, password) {
	for(var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {

	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username or password");
	}
}


var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password");

signIn(userNamePrompt, passwordPrompt); 