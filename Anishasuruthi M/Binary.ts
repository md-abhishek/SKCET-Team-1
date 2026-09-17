let binary = "1011";
let decimal = 0;
for (let i = 0; i < binary.length; i++) {
    decimal = decimal * 2 + Number(binary[i]);
}
console.log("Decimal value:", decimal);