function timer() {
    const newYear = new Date ("January 1, 2024, 00:00");
    const now = new Date();
    const time = newYear - now;

    const ms = 1;
    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(time / msInDays);
    document.querySelector(".days").textContent = displayDay;

    const displayHours = Math.floor((time % msInDays) / msInHours);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((time % msInHours) / msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes

    const displaySeconds = Math.floor((time % msInMinutes) / msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    const displayMsSeconds = Math.floor((time % msInSeconds) / ms);
    document.querySelector(".msSeconds").textContent = displayMsSeconds;

    if (time <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        document.querySelector(".msSeconds").textContent = 0;
        clearInterval(timerID);
        holiday();
    }
}

const timerID = setInterval(timer, 1);

function holiday() {
    const newTitle = document.querySelector("h1");
    newTitle.textContent = "С НОВЫМ ГОДОМ!!!";
    newTitle.classList.add("newClass");
}

const buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", () => {
    document.querySelector("#myAudio").play();
})

const buttonPause = document.querySelector("#pause");
buttonPause.addEventListener("click", () => {
    document.querySelector("#myAudio").pause();
})