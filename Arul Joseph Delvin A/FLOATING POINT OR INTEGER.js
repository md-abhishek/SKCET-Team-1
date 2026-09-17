const input = prompt("Enter a number:");

const number = Number(input);

if (isNaN(number)) {
    console.log("Invalid number.");
} else if (Number.isInteger(number)) {
    console.log("The number is an Integer.");
} else {
    console.log("The number is a Floating-point number.");
}
