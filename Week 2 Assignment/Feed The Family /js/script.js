//   Newland_Bobby _ 4/18/13  How many eggs will it take to feed a family of 3 breakfast all week if they each eat 2 eggs


/* mom dad and kid will eat 6 eggs a day
                         x  7 days a week
                          ______
                            42
 */

var eggs = 1; // each egg

var mom = 2;  // each person will eat 2 eggs
var dad = 2;
var kid = 2;

var name = "The total number of eggs for the week will be"

var daysInWeek = 7; // number of days in a week
var family = [mom, dad, kid]; // family array will be indexes 0,1,2
var total =  name + " " + [ (family[0]) +(family[1]) + (family[2]) ] * eggs * daysInWeek/1;




console.log(total);
