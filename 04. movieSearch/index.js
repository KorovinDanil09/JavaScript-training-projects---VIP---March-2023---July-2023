const moviesSearch = document.querySelector("#moviesSearch");
const item = document.querySelectorAll(".movieWrapper");

moviesSearch.addEventListener("keyup", (e) => {
    const word = e.target.value.toLowerCase();

    item.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none")
    })
})