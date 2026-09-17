const numbers = [64, 25, 12, 22, 11];

for (let i = 1; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j--;
    }

    numbers[j + 1] = key;
}

console.log("Sorted Array:", numbers);