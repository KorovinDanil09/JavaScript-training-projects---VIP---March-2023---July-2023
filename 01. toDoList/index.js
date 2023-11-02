const inputToDoList = document.querySelector(".inputToDoList");
const btnToDoList = document.querySelector(".btnToDoList");
const liContainer = document.querySelector(".liContainer");

btnToDoList.addEventListener("click", () => {
    const item = document.createElement("li");
    item.innerText = inputToDoList.value;
    item.classList.add("newLi");
    liContainer.appendChild(item);
    inputToDoList.value = "";

    item.addEventListener("click", () => {
        item.classList.add("completed")
    })

    item.addEventListener("dblclick", () => {
        liContainer.removeChild(item);
    })
})

inputToDoList.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        btnToDoList.click();
    }
})