function createAutoCompleteHandler(searchFunction) {
    let timer;
    let delay = 300;

    return function handleSearch(query) {
        clearTimeout(timer);

        if (query.length < 2) {
            console.log("Enter at least 2 characters");
            return;
        }

        delay = query.length < 4 ? 500 : 300;

        timer = setTimeout(async () => {
            const suggestions = await searchFunction(query);

            console.log("Suggestions for:", query);
            console.log(suggestions);
        }, delay);
    };
}

async function searchFunction(query) {
    const data = ["apple", "application", "apricot", "banana", "grape", "orange"];

    return data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
}

const handleSearch = createAutoCompleteHandler(searchFunction);

handleSearch("ap");
setTimeout(() => handleSearch("app"), 200);
setTimeout(() => handleSearch("apple"), 400);