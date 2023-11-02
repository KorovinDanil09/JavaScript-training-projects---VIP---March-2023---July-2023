const items = document.querySelectorAll(".item");
console.log(items);

items.forEach(item => {
    item.addEventListener("mouseover", () => {
    removeChoose();
    item.classList.add("choose");
})

removeChoose = () => {
    items.forEach(item => {
    item.classList.remove("choose");
    })
}
})

