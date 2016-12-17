
// var awesomeThoughts = " I am Ekas Preet Singh and I am Awesome";
// var funThoughts = awesomeThoughts.replace("Awesome","Fun");
// console.log(funThoughts);
// $("#main").append(funThoughts);





var name = "Ekas Preet Singh";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);





/*
var s = "audacity";

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
*/


/*var skills = ["programming","awesomeness","teaching","JS"];
$("#main").append(skills +",");
$("#main").append(skills[0]);
$("#main").append(skills.length);
console.log(skills);*/


//var multiArray = ["Euler", 3.14159, {name: "James", job: "Course Developer"}, myFunc];

/*
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);
    var lastElement = newArray.pop();
    newArray.push(lastElement+1);
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/
/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var nameSplit = oldName.split(" ");
    nameSplit[0] = nameSplit[0].slice(0,1).toUpperCase() + nameSplit[0].slice(1).toLowerCase();
    nameSplit[1] = nameSplit[1].toUpperCase();
    finalName = nameSplit.join(" ");

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

*/
/*
//Array as key value Pairs
var skills = ["programming","awesomeness","teaching","JS"];
var bio = {
    "name" : "James",
    "role" : 32,
    "skills" : skills
};
$("#main").append(bio.name);
*/
/*
//1st Way
var bio = {
    "name" : "Ekas Preet Singh",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "971709184",
        "email" : "ekaspreet93.singh@gmail.com",
        "github" : "ekas",
        "twitter" : "@handi_eddy",
        "location" : "New Delhi"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "I am Passionate Learner",
    "skills" : ["C", "C++", "Java"]
};
$("#main").append(bio.na);
*/

//2nd Way
var bio = {};
bio.name = "Ekas Preet Singh";
bio.role = "Web Developer";
bio.contacts = {
    "mobile" : "971709184",
    "email" : "ekaspreet93.singh@gmail.com",
    "github" : "ekas",
    "twitter" : "@handi_eddy",
    "location" : "New Delhi"
};
bio.bioPic = "images/fry.jpg";
bio.welcomeMessage = "I am Passionate Learner";
bio.skills = ["C", "C++", "Java"];


/*//3rd Way
var bio = {};
bio["name"] = "Ekas Preet Singh";
bio["role"] = "Web Developer";
bio["contacts"] = {
    "mobile" : "971709184",
    "email" : "ekaspreet93.singh@gmail.com",
    "github" : "ekas",
    "twitter" : "@handi_eddy",
    "location" : "New Delhi"
};
bio["bioPic"] = "images/fry.jpg";
bio["welcomeMessage"] = "I am Passionate Learner";
bio["skills"] = ["C", "C++", "Java"];*/


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
}



