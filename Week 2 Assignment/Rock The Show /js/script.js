//   Newland_Bobby _ 4/18/13  How much money will we make after expense if we sell all the tickets to the show?


/* For the show we will need a venue for $500, a dj for $250, and a special guest for $250.
 We will sell the tickets for $30 each.
 We have 200 tickets

 $30 x 200 tickets = $6000 - total cost of $1000 = $5000 profit */



var tickets = 30; // cost of each ticket

var venue = 500;  // total expenses
var dj = 250;
var specialGuest = 250;

var cost = [venue, dj, specialGuest];   // cost array will be indexes 0,1,2

var total = tickets * 200 - [(cost[2]) + (cost[1]) + (cost[0])];

console.log(total);

