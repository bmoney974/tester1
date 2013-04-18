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

var daysInWeek = 7; // number of days in a week

var total =  (mom + dad + kid * eggs) * daysInWeek;


