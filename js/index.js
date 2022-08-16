function searchCase(searchValue) {
    if(searchValue.includes("about"))
        document.location.replace("../about.html");
    else if(searchValue.includes("course") || searchValue.includes("queue"))
        document.location.replace("../course.html");
    else if(searchValue.includes("data structures") || searchValue.includes("structures") || searchValue.includes("ds") || searchValue.includes("dsa"))
        document.location.replace("../ds.html");
    else if(searchValue.includes("algorithms"))
        document.location.replace("../daa.html");
    else if(searchValue.includes("practice"))
        document.location.replace("../practice.html");
    else if(searchValue.includes("companies") || searchValue.includes("company") || searchValue.includes("placement") || searchValue.includes("recruitment"))
        document.location.replace("../companies.html");
    else if(searchValue.includes("graph"))
        document.location.replace("../graphs.html");
    else if(searchValue.includes("about"))
        document.location.replace("../about.html");
    else if(searchValue.includes("tutor") || searchValue.includes("teacher") || searchValue.includes("trainer"))
        document.location.replace("../about.html#team-details")
    else
        window.alert("Not Found");
}

document.querySelector("#index-search-button").addEventListener("click", () => {
    let searchValue = document.querySelector("#index-search-field").value.toLowerCase();
    // if(searchValue != "")
        searchCase(searchValue);
});

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let searchValue = document.querySelector("#index-search-field").value.toLowerCase();
        // if(searchValue != "")
            searchCase(searchValue);
    }
});
