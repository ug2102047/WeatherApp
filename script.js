const apikey = "2a30454bc6645782a4b0da8760e33e8a";
const apiBase = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector('.search button');
const searchBox = document.querySelector('.search input');
const weatherIcon = document.querySelector('.weather-icon');
const cityName = document.querySelector('.city');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');

function updateWeatherIcon(condition) {
    if (condition === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
    } else if (condition === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
    } else if (condition === "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
    } else if (condition === "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
    } else if (condition === "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
    }
} 

async function checkWeather(city = "bangalore") {
    try {
        const url = apiBase + encodeURIComponent(city) + `&appid=${apikey}`;
        const response = await fetch(url);

        if (!response.ok) {
            console.error('API error', response.status, response.statusText);
            const err = await response.json().catch(() => null);
            console.error(err);
            return;
        }

        const data = await response.json();
        console.log(data);

        if (cityName) cityName.textContent = data.name;
        if (temperature) temperature.textContent = `${Math.round(data.main.temp)}°C`;
        if (humidity) humidity.textContent = `${data.main.humidity}%`;
        if (windSpeed) windSpeed.textContent = `${data.wind.speed} km/h`;

        updateWeatherIcon(data.weather[0].main);
    } catch (e) {
        console.error('Fetch failed', e);
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value.trim();
    if (city) checkWeather(city);
});

checkWeather();
