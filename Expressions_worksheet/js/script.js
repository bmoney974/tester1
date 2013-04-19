//   Newland_Bobby _ 4/17/13  Expression Work Sheet



var shop1 = 50
var shop2 = 65
var shop3 = 40
var shop4 = 70
var shop5 = 30

var name = "We spent a total of "
var name2 = "on groceries that's an average of"
var name3 = "a week"
var name4 = "$"

var weekly = [shop1, shop2, shop3, shop4, shop5]; // 0,1,2,3,4

var total = (weekly[0]) + (weekly[1]) + (weekly[2]) + (weekly[3]) + (weekly[4]);

var total2 = name + " " + name4 + total   + " " + name2 + " "+ name4 + (total/5) + " " + name3;

console.log(total2);