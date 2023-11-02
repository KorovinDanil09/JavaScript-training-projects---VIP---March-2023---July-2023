const myImages = document.querySelector("#myImages");
const text = document.querySelector("h2");

const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");

oneBtn.addEventListener("click", left);
twoBtn.addEventListener("click", right);

function left() {
    myImages.setAttribute("src", "assets/1652843488_1-celes-club-p-anime-fon-estetika-krasivie-2.jpg");
    text.innerText = "Чем вам понравилась данная картинка?";
    oneBtn.innerHTML = "Красивый фон";
    twoBtn.innerHTML = "Понравился стиль";

    oneBtn.addEventListener("click", likeOne);
    twoBtn.addEventListener("click", likeTwo);
}

function likeOne() {
    myImages.setAttribute("src", "assets/1-2.jpg");
    text.innerText = "Вы влюблены?";
    oneBtn.style.display = "none";
    twoBtn.style.display = "none";
}

function likeTwo() {
    myImages.setAttribute("src", "assets/1-1.jpg");
    text.innerText = "У вас есть чувство стиля!";
    oneBtn.style.display = "none";
    twoBtn.style.display = "none";
}

function right() {
    myImages.setAttribute("src", "assets/1654664872_5-celes-club-p-esteticheskie-oboi-anime-krasivie-6.png");
    text.innerText = "Чем вам понравилась данная картинка?";
    oneBtn.innerHTML = "Красивый фон";
    twoBtn.innerHTML = "Понравился стиль";

    oneBtn.addEventListener("click", likeOne);
    twoBtn.addEventListener("click", likeTwo);
}