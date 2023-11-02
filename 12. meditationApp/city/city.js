const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", () => {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})

const timer = 2;
let amountTime = timer * 60 * 60;

function calculateTime() {
    const timer = document.querySelector("#timer");

    let displayHours = Math.floor((amountTime / 60) / 60);
    let displayMinutes = Math.floor((amountTime / 60) % 60);
    let displaySeconds = amountTime % 60;

    if (displayMinutes < 10) {
        displayMinutes = `${"0" + displayMinutes}`;
    }

    if (displaySeconds < 10) {
        displaySeconds = `${"0" + displaySeconds}`;
    }
    
    timer.textContent = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }

    function stopTimer() {
        clearInterval(timetID)
    }
}

let timetID = setInterval(calculateTime, 1000);