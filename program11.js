// Write a program to find the largest of three numbers.

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let num3 = parseFloat(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {      
    console.log(`The largest number is: ${num2}`);
} else {                
    console.log(`The largest number is: ${num3}`);
}

