const input: string = "programming";
let result: string = "";
const seen = new Set<string>();

for (const char of input) {
    if (!seen.has(char)) {
        seen.add(char);
        result += char;
    }
}

console.log("Original String:", input);
console.log("After Removing Duplicates:", result);