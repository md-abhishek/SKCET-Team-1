function bubbleSort(arr) 
{
    const sortedArray = [...arr];
    const n = sortedArray.length;

    for (let i = 0; i < n - 1; i++) 
    {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) 
        {
            if (sortedArray[j] > sortedArray[j + 1]) 
            {
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
                swapped = true; 
            }
        }
        if (!swapped) break;
    }
    return sortedArray;
}

const userInput = prompt("Enter numbers separated by spaces:");

const unsortedArray = userInput.split(" ").map(Number);
console.log("Before Sorting:", unsortedArray);


const result = bubbleSort(unsortedArray);
console.log("After Sorting:", result);
