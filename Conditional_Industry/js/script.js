// how much cloud space will i have left once i back up my data and have a 100gb bonus

var accountCurrent = true;

var space = prompt(" How Much Data Do You Have");  // how data do you have
var spaceAvailable = 1000

var level1 = 0
var level2 = 700
var level3 = 900


var bonus = 100;
var spaceWithBonus = spaceAvailable + bonus;

accontCurrent = true ? " Your account is current ...": " your account is past due"
if( accontCurrent = true && space >= level1 && space < level2){       // plenty of space level
    console.log(" You Have enough Space")  // answer 1
} else if( accontCurrent = true && space >= level2  && space < level3){    // how much data
    console.log("Your Space Is Running Low")     // answer 2
}else if(accontCurrent = true && space >= level3 && space < spaceWithBonus ){
    console.log("You Space Is Critical")    // answer 3
}else if (accontCurrent = true && space >= spaceWithBonus){
    console.log("You Are Out Of Space")    // answer 4
}