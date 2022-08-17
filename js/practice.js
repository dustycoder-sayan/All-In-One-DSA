function searchCase(searchValue) {
    if(searchValue.includes("hackerrank"))
        document.location.replace("https://www.hackerrank.com/domains/data-structures");
    else if(searchValue.includes("codechef"))
        document.location.replace("https://www.codechef.com/practice?end_rating=999&group=all&hints=0&itm_campaign=practice&itm_medium=navmenu&limit=20&page=0&search=&sort_by=difficulty_rating&sort_order=asc&start_rating=0&tags=&topic=&video_editorial=0&wa_enabled=0");
    else if(searchValue.includes("advanced") || searchValue.includes("expert") || searchValue.includes("hard") || searchValue.includes("leetcode"))
        document.location.replace("https://leetcode.com/problemset/all/?difficulty=HARD&page=1");
    else if(searchValue.includes("beginner") || searchValue.includes("easy"))
        document.location.replace("https://leetcode.com/problemset/all/?difficulty=EASY&page=1");
    else if(searchValue.includes("intermediate") || searchValue.includes("medium"))
        document.location.replace("https://leetcode.com/problemset/all/?difficulty=MEDIUM&page=1");
    else
        window.alert("Please Try Searching Again!");
}

document.querySelector("#practice-search-button").addEventListener("click", () => {
    let searchValue = document.querySelector("#practice-search-field").value.toLowerCase();
    if(searchValue != "")
        searchCase(searchValue);
});

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let searchValue = document.querySelector("#practice-search-field").value.toLowerCase();
        if(searchValue != "")
            searchCase(searchValue);
    }
});
