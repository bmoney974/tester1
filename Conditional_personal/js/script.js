// if my check after my $100 phone billeis $400 or higher i will buy an out fit and go to the movies if less that $400 I will just go to the movies
// it's less than $300 i will stay home

var getPaid = true;

var check = prompt(" How Much is your check ");  // how much is check

var phoneBill = 100;
var checkAfterBill = check -phoneBill;
getPaid = true ? " You got paid so you can ...": " No check for you"
if( getPaid = true && checkAfterBill >= 400 ){       // if check is greater than or equal to 400
    console.log(" You can get an out fit and go to the movies")  // answer 1
} else if( getPaid = true && checkAfterBill < 400 && checkAfterBill >= 300){    // if check is less than 400 and greater than or equal to 300
    console.log("You can only go to the moves")     // answer 2
}else if(getPaid = true && checkAfterBill < 300){ // if check is less than 300
    console.log("Sorry you gotta stay home")    // answer 3
}