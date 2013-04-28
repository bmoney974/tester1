//if i put to much water in the jug will it be too heavy


var waterInJug = true;

var water = prompt(" How Many Gallons");  // how data do you have


var level1 = 0
var level2 = 5
var level3 = 10
var maxWeight =15


waterInJug = true ? " Your account is current ...": " your account is past due"
if( waterInJug = true && water >= level1 && water < level2){       //how much water
    console.log(" Its Pretty Lite")  // answer 1
} else if( waterInJug = true && water >= level2  && water < level3){    // how much data
    console.log("Its getting Heavy")     // answer 2
}else if(waterInJug = true && water >= level3 && water < maxWeight ){
    console.log("Who do you thing you are super man!")    // answer 3
}else if (waterInJug = true && water >= maxWeight){
    console.log("Nope I'm not gonna lift it")    // answer 4
}