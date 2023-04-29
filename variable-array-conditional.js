//some example of variable
var bookColor = 'red';
var bookQuantity = 5;
var isFull = false;

// example of  array variable
var myUseFull = ["book", "pen", "mouse", "keyboard"];
var penIndex = myUseFull.indexOf("pen");
//console.log(penIndex);

//update book name
myUseFull[0] = "Books";
//console.log(myUseFull);

// add item in array
myUseFull.push("box");
myUseFull.push("Monitor");
//console.log(myUseFull);

// to know item name by index
var itemName = myUseFull[4];
//console.log(itemName);

// delete item in array
myUseFull.pop();
//console.log(myUseFull);

// example of  conditional

if (myUseFull.length >= 4) {
    console.log(" i can use all item");
}
else if (myUseFull == 4) {
    console.log(" i can use only four item");
}
else {
    console.log(" nothing more to do");
}