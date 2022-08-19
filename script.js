const piValue = 3.1415926;
var fName =prompt("Enter your name: ");
const myFavNum = prompt("Enter a number: ");
const number = Math.pow(myFavNum, 2);
const area = piValue * number;
document.write(`Hello ${fName}. You entered ${myFavNum}, if that was the radius of a circle, the area would be: ${area} `);
