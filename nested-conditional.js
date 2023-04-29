//(advanced) Multi stage condition and nested conditions

var batarBonPrice = 50;
var horlicksPrice = 30;
var toastPrice = 15;
var myBudget = 10;
var masiPoka = false;
// it's not nested but its multi stage condition

// if (batarBonPrice < myBudget) {
//     console.log("i am interested to eat Batar bon");
// }
// else if (horlicksPrice < myBudget) {
//     console.log("now i can  eat horlicks");
// }
// else if (toastPrice < myBudget) {
//     console.log("let go with me to eat toast");
// }
// else {
//     console.log("nothing more to do");
// }

// it's nested condition with multi stage condition

if (batarBonPrice < myBudget) {
    //nested in here
    if (masiPoka == true) {
        console.log("i am interested to eat Batar bon");
    }
    else {
        console.log("Batar Bon Khabona karon masi lagse");
    }

}
else if (horlicksPrice < myBudget) {
    console.log("now i can  eat horlicks");
}
else if (toastPrice < myBudget) {
    console.log("let go with me to eat toast");
}
else {
    console.log("nothing more to do");
}

