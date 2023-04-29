//Make conditional decision, if-else, comparison

var isFoodReady = false;
if (isFoodReady == true) {
    console.log('Akashi - I will eat Now');
}
else {
    console.log('Go and ready for me');
}

var iPhonePrice = 80000;
var myBudget = 20000;

if (iPhonePrice < myBudget) {
    console.log('I am Ready to go to buy Iphone, i have money for that');
}
else {
    console.log('I am Ready to go to buy normal phone, i have no money for Iphone');
}
//Handle multiple conditions, and or
var gotJob = true;
var moneySaved = 100000;
var hasFlat = false;

//example -1
// if (gotJob == true && moneySaved > 200000) {
//     console.log('You avilable for the Marry');
// }
// else {
//     console.log('You Cannot avilable for the Marry');
// }


//example -2
// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('You avilable for the Marry');
// }
// else {
//     console.log('You Cannot avilable for the Marry');
// }

//example -3
// if (gotJob == true || moneySaved > 200000) {
//     console.log('You avilable for the Marry');
// }
// else {
//     console.log('You Cannot avilable for the Marry');
// }

//example advance -3
var webDeveloper = true;
var lotOfMoney = 300000;
var hasFlat = false;
var hasHouse = false;

if ((webDeveloper == true && lotOfMoney > 200000) || hasHouse == true) {
    console.log('You avilable for the Marry');
}
else {
    console.log('You Cannot avilable for the Marry');
}
