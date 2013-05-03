// Bobby Newland Assignment Week 3
// When I get paid after I pay my bills what gift can I buy my girlfriend for her birthday



var bill1 = prompt(" Water Bill");
var bill2 = prompt("Gas Bill");
var bill3 = prompt("Light Bill");


function calcBills(){
    var a = parseInt(bill1);
    var b = parseInt(bill2);
    var c = parseInt(bill3);
    var check = 500
    var totalBills = ( a +b + c );
    var amountLeft = (check - totalBills);

    console.log("You have " + "$" +  amountLeft + " left");

    if(amountLeft >= 300){
        console.log("You Can take her on a trip to the beach");
    }else if(amountLeft >200 && amountLeft < 300) {
        console.log("You can take her to dinner")
    }
}

calcBills();

