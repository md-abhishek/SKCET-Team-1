let str1: string = "listen";
let str2: string = "silent";

str1 = str1.toLowerCase().replace(/\s/g, "");
str2 = str2.toLowerCase().replace(/\s/g, "");

if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    let sorted1: string = str1.split("").sort().join("");
    let sorted2: string = str2.split("").sort().join("");

    if (sorted1 === sorted2) {
        console.log("Anagrams");
    } else {
        console.log("Not Anagrams");
    }
}
