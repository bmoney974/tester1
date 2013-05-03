// Bobby Newland Assignment Week 3
// if we sell x amount of cds each week we will be able to buy a van at the end of the month after expenses

var week1 = prompt ("Week 1 Number of Cds sold");     // prompts
var week2 = prompt ("Week 2 Number of Cds sold");
var week3 = prompt ("Week 2 number of Cds Sold");

function buyTheVan(vanCost){    // function
    var cdValue = 10
    var expenses = 1000

                                            // variables
    var a = parseInt(week1);
    var b = parseInt(week2);
    var c = parseInt(week3);

    var totalSales = (a + b + c) * cdValue;     // total sales calculation
    var profit = (totalSales - expenses );

    var verdict

    verdict = (profit >= vanCost) ? "You can buy the van!!" : "Get back in the streets and sell more CD\'s";
    console.log("You made a profit of " + "$" + profit );
    console.log(verdict);
}

buyTheVan(3000);    // function call




