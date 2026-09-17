function processUserArray(): void 
{
    const userInput = prompt("Enter numbers: ");
    
    const rawArray = userInput.split(" ").map(item => Number(item.trim()));
    console.log("Original Array:", rawArray);

    const cleanArray: number[] = [];
    for (const item of rawArray) 
    {
        if (!cleanArray.includes(item)) 
        {
            cleanArray.push(item);
        }
    }

    console.log("Array after removing duplicates:", cleanArray);
    alert("Cleaned Array: " + JSON.stringify(cleanArray));
}

processUserArray();
