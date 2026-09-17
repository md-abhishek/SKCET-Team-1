function findGCD(a, b)
{
    while (b !== 0) 
    {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));

const lcm = (num1 * num2) / findGCD(num1, num2);
alert(`LCM is: ${lcm}`);
