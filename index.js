// index.js

function fetchData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

fetchData("https://example.com/api/data");
