function createKeyValuePair(key: string, value: number): [string, number] 
{
    return [key, value];
}

const key = prompt("Enter key:");
const value = Number(prompt("Enter value:"));

const pair: [string, number] = createKeyValuePair(key, value);

console.log("Key:", pair[0]);
console.log("Value:", pair[1]);
console.log("Key-Value Pair:", pair);
