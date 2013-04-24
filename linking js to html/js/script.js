// Conditional Logic -- With an Expression   Else If

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45;  // height of kid with parent

// if the child is old enough, print to the console "you can ride"
// if the kid is over 48 inches in height

if(kidHeight > minHeight){  // conditional
    // code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
      console.log("You can ride, but only with a parent present ");

}else{
    console.log ("Sorry kid you got some growing to do first!");

}
