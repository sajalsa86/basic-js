var price1 = 31;
var price2 = 10;


var sum = price1 + price2;

var difference = price2 - price1;

var multiplication = price1 * price2;

var division = price1 / price2;

//output
console.log(sum);
console.log(difference);
console.log(multiplication);
console.log(division);

var doublePrice = price1 * 2;

var newPrice = price2 + 50;
//output
//console.log(doublePrice);
console.log(newPrice);


//sorthand
//age price1 variable declartion kora silo tai otar man update korte hole abar var diye suru kora lagbe na
// price1 = price1 + 19; //or
price1 += 19;

// price2 = price2 - 2; //or
price2 -= 2;
//output
console.log(price1);
console.log(price2);

var age = 28;
// age = age + 2;
age += 2;
age++;
//output
console.log(age);

var love = 100;
// love = love - 2;
love -= 2;
love--;
//output
console.log(love);

//special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(parseFloat(total.toFixed(1)));
console.log(typeof total); // to know variable type
//shorthand
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
console.log(total);
console.log(typeof total);

var mangos = 7;
var manPower = 2;
var remaining = mangos % manPower;
console.log(remaining);
