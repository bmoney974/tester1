//   Newland_Bobby _ 4/17/13  Expression Work Sheet

var dis = 20;
var originalPrice = 100
var discount = .20
var description = "Jacket"
var name = "Your"
var name2 = "was originally"
var dollarsign = "$"
var name3 = "but after a "
var precent = "%"
var name4 =  "\,it is now"
var name5= "without tax and"
var name6 = "with tax"
var tax = .10
var dis2 = "discount"
var discountedPrice = originalPrice - (originalPrice * discount);

var afterTax = discountedPrice + (discountedPrice * tax);

var printOut = name + " " + description + " " + name2 + " " + dollarsign + originalPrice + " " +
    name3 + dis + precent + " " + dis2 + " " + name4
+ " " + dollarsign + discountedPrice +" " + name5 + " "+ dollarsign + afterTax + " " + name6;

console.log(printOut);