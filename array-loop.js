// run a loop for each element of an array

var numbers = [10, 20, 30, 40, 50, 60];
numbers.push(70);
numbers.push(80);
numbers.pop();
for (var n = 0; n < numbers.length; n += 1) {
    var element = numbers[n];
    console.log(element);
}

var childName = ["Shihab", "Suchi", "Redone", "Safaet"];
childName.push("Sajid");
childName.push("Safone");
childName.push("Samiha");
childName.pop("Samiha");
var strintLoop = 0;
while (strintLoop < childName.length) {
    var conectName = childName[strintLoop];
    console.log(conectName);
    strintLoop = strintLoop + 1;
}