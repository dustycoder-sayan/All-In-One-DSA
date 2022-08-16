function searchCase(searchValue) {
    if(searchValue.includes("product"))
        document.location.replace("#product-based");
    else if(searchValue.includes("service"))
        document.location.replace("#serice-based");
    else if(searchValue.includes("start"))
        document.location.replace("#start-ups");
    else
        window.alert("No such Algorithm Available")
}

document.querySelector("#companies-search-button").addEventListener("click", () => {
    let searchValue = document.querySelector("#companies-search-field").value.toLowerCase();
    searchCase(searchValue);
});

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let searchValue = document.querySelector("#companies-search-field").value.toLowerCase();
    if(searchValue != "")
        searchCase(searchValue);
    }
});
