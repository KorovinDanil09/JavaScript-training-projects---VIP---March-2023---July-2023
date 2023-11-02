const back = document.querySelector("#back");
const next = document.querySelector("#next");

const images = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg"];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > images.length - 1) {
        i = 0;
    }
    document.querySelector("#images").src = images[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.querySelector("#images").src = images[i];
})