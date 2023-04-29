// array string variable
// array te index count start hoi 0 theke
var childName = ['Shihab', 'Suchi', 'Redone', 'Safaet', 'Sajid', 'Safone', 'Samiha'];

// put value on other variable
// array theke kono kisur index koto ta jante indexOf function use kora hoi
var singleChild = childName.indexOf('Safaet');

// output
console.log(singleChild);


// array number variable
var myNumber = [2, 8, 16, 32, 64];

// put value on other variable
// array theke kono kisur index koto ta jante indexOf function use kora hoi
var singleNumber = myNumber.indexOf(16);

// output
console.log(singleNumber);

//array te jeta nai emon kisur jodi index jante chai tahole -1 result asbe
var outOfNumber = myNumber.indexOf(80);
console.log(outOfNumber);

//kono index number a ki info ase ta jante...

var singleInfo = childName[6];
console.log(singleInfo);

var singleNumberInfo = myNumber[3];
console.log(singleNumberInfo);


// array theke kono element  er value ba name change korte chile...
childName[6] = 'Samiha Hatun';
console.log(childName);

var update64 = myNumber[4] = 150;
console.log(update64);
