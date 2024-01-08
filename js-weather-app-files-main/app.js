import getWeatherData from "./utils/httpReq.js";
import showModal from "./utils/modal.js";

const searchInput = document.getElementById("location-search");
const searchButton = document.getElementById("location-search-button");
const weatherContainer = document.getElementById("weather");
const locationButton = document.getElementById("location-img");
const main = document.querySelector(".forecast-weather");

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let isDown = false;
let startX;
let scrollLeft;

const renderCurrentWeather = (data) => {
  if (!data) return;
  weatherContainer.innerHTML = "";
  const weatherJSx = `
    <div class="header__info">
        <h1 class="header__title">${data.name}, ${data.sys.country}</h1>
        <div class="header__Weather">
            <img src="https://api.openweathermap.org/img/w/01d.png" alt="location" class="weather__icon">
            <p class="weather__condition">${data.weather[0].main}</p>
            <p class="weather__temp">${Math.round(data.main.temp)}°C</p>
        </div>
        <div class="header__condition">
            <p class="header__text">Humidity: <span id="humidity">${
              data.main.humidity
            } %</span></p>
            <p class="header__text">Wind Speed: <span id="wind-speed">${
              data.wind.speed
            } m/s</span></p>
        </div>
    </div>
  `;
  weatherContainer.innerHTML += weatherJSx;
};
const getWeekDay = (date) => {
  return DAYS[new Date(date * 1000).getDay()];
};
const renderForecastWeather = (data) => {
  if (!data) return;
  main.innerHTML = "";
  data.list.forEach((item) => {
    const forecastJSx = `
        <div class="forecast-weather__node">
            <div class="weather__icon"><img src="https://api.openweathermap.org/img/w/${
              item.weather[0].icon
            }.png" alt="location" class="weather__icon"></div>
            <p class="weather__text">${getWeekDay(item.dt)}</p>
            <p class="forecast-weather__temp">${Math.round(
              item.main.temp,
            )}°C</p>
            <p class="weather__main">${item.weather[0].main}</p>
            <p class="weather__date">${item.dt_txt}</p>
        </div>
      `;
    main.innerHTML += forecastJSx;
  });
};
const searchHandler = async () => {
  const cityName = searchInput.value;
  if (!cityName) {
    showModal("Please enter a city name", "error");
    return;
  }
  const currentData = await getWeatherData("current", cityName);
  const forecast = await getWeatherData("forecast", cityName);
  renderCurrentWeather(currentData);
  renderForecastWeather(forecast);
  searchInput.value = "";
  // console.log(forecast);
};
const firstData = async () => {
  const firstCity = "tehran";
  const firstWeatherData = await getWeatherData("current", firstCity);
  const firstForecastData = await getWeatherData("forecast", firstCity);
  renderCurrentWeather(firstWeatherData);
  renderForecastWeather(firstForecastData);
};
const positionCallback = async (position) => {
  const locationWeatherData = await getWeatherData("current", position.coords);
  const locationForecastData = await getWeatherData(
    "forecast",
    position.coords,
  );
  renderCurrentWeather(locationWeatherData);
  renderForecastWeather(locationForecastData);
};
const errorCallback = (error) => console.log(error.massage);
const locationHandler = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(positionCallback, errorCallback);
  } else {
    showModal("Your browser does not support geolocation", "error");
  }
};
searchButton.addEventListener("click", searchHandler);
locationButton.addEventListener("click", locationHandler);
window.addEventListener("load", firstData);
main.addEventListener("mousedown", (e) => {
  isDown = true;
  main.classList.add("active");
  startX = e.pageX - main.offsetLeft;
  scrollLeft = main.scrollLeft;
});
main.addEventListener("mouseleave", () => {
  isDown = false;
  main.classList.remove("active");
});
main.addEventListener("mouseup", () => {
  isDown = false;
  main.classList.remove("active");
});
main.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - main.offsetLeft;
  const walk = (x - startX) * 2;
  main.scrollLeft = scrollLeft - walk;
});
//   touchEvents
main.addEventListener("touchstart", (e) => {
  isDown = true;
  main.classList.add("active");
  startX = e.pageX - main.offsetLeft;
  scrollLeft = main.scrollLeft;
});
main.addEventListener("touchend", () => {
  isDown = false;
  main.classList.remove("active");
});
main.addEventListener("touchcancel", () => {
  isDown = false;
  main.classList.remove("active");
});
main.addEventListener("touchmove", (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - main.offsetLeft;
  const walk = (x - startX) * 2;
  main.scrollLeft = scrollLeft - walk;
});
