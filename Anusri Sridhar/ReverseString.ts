const input1: string = "Hello World";
let reversed: string = "";

for (let i = input1.length - 1; i >= 0; i--) {
    reversed += input[i];
}

console.log("Original String:", input1);
console.log("Reversed String:", reversed);