
//Create a database with one user object
var database = [
  {
    username: "Caleb",
    password: "password1"
  },
  {
    username: "Michelle",
    password: "pass"
  },
  {
    username: "Grant",
    password: "wubdub"
  }
];

//Create a newsfeed array of objects
var newsfeed = [
    {
        username: "Jessica",
        timeline: "Selfies!"
    },
      {
        username: "Matt",
        timeline: "Promotion!"
    },
      {
        username: "Marge",
        timeline: "Traveling!"
    }
];

//Get username and password
var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

//Check for user in database
function isUserValid (username, password){
  for(var i = 0; i < database.length; i++){
  if(username === database[i].username &&
     password === database[i].password){
    return true;
  }
}
return false;
};

//If user is in database, log in
function signIn (username, password){
  if(isUserValid(username, password)){
    console.log(newsfeed);
  }else{
    alert("Sorry, wrong username and/or password.")
  }
};

signIn(usernamePrompt, passwordPrompt);
