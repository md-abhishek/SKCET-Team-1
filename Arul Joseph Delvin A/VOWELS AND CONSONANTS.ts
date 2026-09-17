let str: string = "Hello World";

let vowels: number = 0;
let consonants: number = 0;

for (let ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels =", vowels);
console.log("Consonants =", consonants);
