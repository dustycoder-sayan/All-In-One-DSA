function searchCase(searchValue) {
    if(searchValue.includes("array"))
        document.location.replace("../arrays.html");
    else if(searchValue.includes("stack") || searchValue.includes("queue"))
        document.location.replace("../stacks-queues.html");
    else if(searchValue.includes("recursion"))
        document.location.replace("../recursion.html");
    else if(searchValue.includes("string"))
        document.location.replace("../strings.html");
    else if(searchValue.includes("linked") || searchValue.includes("list"))
        document.location.replace("../linked-list.html");
    else if(searchValue.includes("tree"))
        document.location.replace("../trees.html");
    else if(searchValue.includes("graph"))
        document.location.replace("../graphs.html");
    else if(searchValue.includes("hash") || searchValue.includes("map") || searchValue.includes("heap"))
        document.location.replace("../heaps.html");
    else
        window.alert("No such Data Structure Available");
}

document.querySelector("#ds-search-button").addEventListener("click", () => {
    let searchValue = document.querySelector("#ds-search-field").value.toLowerCase();
    if(searchValue != "")
        searchCase(searchValue);
});

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let searchValue = document.querySelector("#ds-search-field").value.toLowerCase();
        if(searchValue != "")
            searchCase(searchValue);
    }
});
