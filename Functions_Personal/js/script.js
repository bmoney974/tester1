// Bobby Newland Assignment Week 4
// When I get paid after I pay my bills what gift can I buy my girlfriend for her birthday



var bill1 = prompt(" Water Bill");       // prompts
var bill2 = prompt("Gas Bill");
var bill3 = prompt("Light Bill");


function calcBills(){
    var a = parseInt(bill1);    // convert to number
    var b = parseInt(bill2);
    var c = parseInt(bill3);
    var check = 500            // check amount
    var totalBills = ( a +b + c );    // all bills added
    var amountLeft = (check - totalBills);      // amount left after bills

    console.log("You have " + "$" +  amountLeft + " left");  // result 1

    if(amountLeft >= 300){
        console.log("You Can take her on a trip to the beach");   // result 2
    }else if(amountLeft <200 && amountLeft > 100) {
        console.log("You can take her to dinner");      //result 3
    }else if (amountLeft <= 100){
        console.log("All you can afford is a lot of love");

    }
}

calcBills();            // call function

