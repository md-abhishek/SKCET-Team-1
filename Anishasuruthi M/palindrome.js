let text = "madam";
let reverse = text.split("").reverse().join("");
if (text === reverse) {
    console.log("Palindrome");
} 
else {
    console.log("Not a Palindrome");
}