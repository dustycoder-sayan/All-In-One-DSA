function searchCase(searchValue) {
    if(searchValue.includes("sort"))
        document.location.replace("../sorting.html");
    else if(searchValue.includes("search"))
        document.location.replace("../searching.html");
    else if(searchValue.includes("time") || searchValue.includes("time complexity") || searchValue.includes("big o"))
        document.location.replace("../time_comp.html");
    else if(searchValue.includes("string"))
        document.location.replace("../strings.html");
    else if(searchValue.includes("bit") || searchValue.includes("bits"))
        document.location.replace("../bit.html");
    else if(searchValue.includes("divide") || searchValue.includes("conquer"))
        document.location.replace("../dac.html");
    else if(searchValue.includes("greedy"))
        document.location.replace("../greedy.html");
    else if(searchValue.includes("dynamic"))
        document.location.replace("../d-p.html");
    else
        window.alert("No such Algorithm Available")
}

document.querySelector("#daa-search-button").addEventListener("click", () => {
    let searchValue = document.querySelector("#daa-search-field").value.toLowerCase();
    searchCase(searchValue);
});

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let searchValue = document.querySelector("#daa-search-field").value.toLowerCase();
    if(searchValue != "")
        searchCase(searchValue);
    }
});
