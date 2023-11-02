const API = {
    link: "https://api.openweathermap.org/data/2.5/",
    keyCode: "dff43145e653159859eb5356ec589a19"
}

const search = document.querySelector("#search");
const locationOn = document.querySelector("#location");
const forecastOn = document.querySelector("#forecast");

search.addEventListener("keydown", result);

function result(e) {
    if (e.keyCode === 13) {
        getInfo(search.value);
        search.value = "";
    }
}

async function getInfo(data) {
    const access = await fetch(`${API.link}weather?q=${data}&units=metric&appID=${API.keyCode}`);
    const accessTranslation = await access.json();
    replacement(accessTranslation);
}

function replacement(accessTranslation) {
    let sity = document.querySelector("#sity");
    sity.textContent = `${accessTranslation.name}, ${accessTranslation.sys.country}`;

    showDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(accessTranslation.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${"Feels Like:"} ${Math.round(accessTranslation.main.feels_like)}<span>°</span>`;

    let weather = document.querySelector("#weather");
    weather.textContent = `${accessTranslation.weather[0].description}`;

    let fluctuations = document.querySelector("#fluctuations");
    fluctuations.innerHTML = `${"Min:"} ${Math.round(accessTranslation.main.temp_min)}<span>°</span> ${"Max:"} ${Math.round(accessTranslation.main.temp_max)}<span>°</span>`;

    locationOn.style.display = "flex";
    forecastOn.style.display = "flex";
}

function showDate() {
    const date = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[date.getDay()];
    let number = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    const todayDate = document.querySelector("#todayDate");
    todayDate.textContent = `${day} ${number} ${month} ${year}`;
}