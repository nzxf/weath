import './style/main.css';
import './style/topBar.css';
import './style/bottomBar.css';
import './style/sideBar.css';
import './style/media.css';
import './style/animation.css';
import { myFunctions } from './functions';
import { icons } from './weatherIcons';
import { keys } from './weatherKeys';
import { worlds } from './worlds';

const aWeekFromTomorrow = myFunctions.aWeekFromTomorrow;
const sideCities = myFunctions.sideCities;
const dayMaker = myFunctions.dayMaker;
const dateMaker = myFunctions.dateMaker;
const timeMaker = myFunctions.timeMaker;
const dayOrNight = myFunctions.dayOrNight;
const weatherTranslator = myFunctions.weatherTranslator;
const animateElement = myFunctions.animateElement;

// API WEATHER (NOT SECURE?)
const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';

const tellWeather = async (api, city) => {
  const url = 'https://api.weatherapi.com/v1/';
  const cors = { mode: 'cors' };
  const res = await fetch(`${url}current.json?key=${api}&q=${city}`, cors);
  const data = await res.json();
  return data;
};
const tellForecast = async (api, zipcode, days) => {
  const url = 'https://api.weatherapi.com/v1/';
  const res = await fetch(
    `${url}forecast.json?key=${api}&q=${zipcode}&days=${days}`
  );
  const data = await res.json();
  return data;
};
const userFrom = async (api, key) => {
  const url = 'https://api.weatherapi.com/v1/';
  const cors = { mode: 'cors' };
  const res = await fetch(`${url}current.json?key=${api}&q=${key}`, cors);
  const data = await res.json();
  return data.location.name;
};

function fillMainBody(cityData) {
  //  MAIN ICON
  let localTime = dayOrNight(timeMaker(cityData.location.localtime));
  let weatherCode = cityData.current.condition.code;
  let weatherIcon = weatherTranslator(localTime, weatherCode, keys, icons);
  const mainIcon = document.querySelector('.main-icon');
  mainIcon.style.backgroundImage = `url(${weatherIcon}`;
  // CITY
  const mainCity = document.querySelector('.main-city');
  mainCity.textContent = cityData.location.name;
  // COUNTRY
  const mainCountry = document.querySelector('.main-country');
  mainCountry.textContent = cityData.location.country;
  // // LOCALE DATE
  const mainDate = document.querySelector('.main-date');
  mainDate.textContent = dateMaker(cityData.location.localtime);
  // // LOCALE TIME
  const mainTime = document.querySelector('.main-time');
  mainTime.textContent = dayMaker(cityData.location.localtime);
  // // MAIN WEATHER
  const mainWeather = document.querySelector('.main-weather');
  mainWeather.textContent = cityData.current.condition.text.toUpperCase();
  // // TEMPERATURES
  const tempC = document.querySelector('.temp-celcius');
  tempC.textContent = `${cityData.current.temp_c} °C`;
  const tempF = document.querySelector('.temp-fahrenheit');
  tempF.textContent = `${cityData.current.temp_f} °F`;
  // // HUMIDITY
  const humid = document.querySelector('.humid');
  humid.textContent = `${cityData.current.humidity}%`;
  // // WIND
  const windMet = document.querySelector('.wind-metric');
  windMet.textContent = `${cityData.current.wind_mph} mph`;
  const windImp = document.querySelector('.wind-imperial');
  windImp.textContent = `${cityData.current.wind_kph} kph`;
  // UV
  const uv = document.querySelector('.uv');
  uv.textContent = `${cityData.current.uv}.0`;
  // CLOUD
  const cloud = document.querySelector('.cloud');
  cloud.textContent = `${cityData.current.cloud}%`;
}
function fillBottomBar(cityData) {
  let dataArr = cityData.forecast.forecastday;
  dataArr.shift(); // FIRST DAY ALREADY SHOWN IN MAINBODY
  let weekDays = aWeekFromTomorrow();
  for (let i = 0; i < 7; i++) {
    // DATE
    const date = document.querySelector(`.end-date-${i}`);
    date.textContent = dataArr[i].date.slice(8, 10);
    // DAY
    const day = document.querySelector(`.end-day-${i}`);
    day.textContent = weekDays[i].slice(0, 3);
    // ICON
    let weatherCode = dataArr[i].day.condition.code;
    let weatherIcon = weatherTranslator('day', weatherCode, keys, icons);
    const icon = document.querySelector(`.end-icon-${i}`);
    icon.style.backgroundImage = `url(${weatherIcon})`;
    // WEATHER
    const weather = document.querySelector(`.end-weather-${i}`);
    weather.textContent = dataArr[i].day.condition.text;
  }
}

async function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    // CITY
    const sideCity = document.querySelector(`.side-city-${i}`);
    sideCity.textContent = data.location.name;
    // COUNTRY
    const sideCountry = document.querySelector(`.side-country-${i}`);
    sideCountry.textContent = data.location.country;
    // ICON
    let localTime = dayOrNight(timeMaker(data.location.localtime));
    let weatherCode = data.current.condition.code;
    let weatherIcon = weatherTranslator(localTime, weatherCode, keys, icons);
    const sideIcon = document.querySelector(`.side-icon-${i}`);
    sideIcon.style.backgroundImage = `url(${weatherIcon})`;
    // TEMPERTATURE CELCIUS
    const sideTempC = document.querySelector(`.side-temp-c-${i}`);
    sideTempC.textContent = `${data.current.temp_c} °C`;
    // TEMPERTATURE FAHRENHEIT
    const sideTempF = document.querySelector(`.side-temp-f-${i}`, 'hidden');
    sideTempF.textContent = `${data.current.temp_f} °F`;
    // LOCAL TIME
    const sideTime = document.querySelector(`.side-time-${i}`);
    sideTime.textContent = dayMaker(data.location.localtime);
    // ANIMATION
    animateElement(`.side-container-${i}`, 'slide-in', 'once');
  }
  animateElement('.sidebar-end', 'slide-in', 'once');
}
async function checkInput(userInput) {
  if (!userInput) {
    return console.log('input invalid, empty');
  } else {
    let cityData = await tellForecast(API_KEY_WEATHER, userInput, 8);
    fillMainBody(cityData);
    fillBottomBar(cityData);
  }
}
const firstLoad = async () => {
  let userLoc = await userFrom(API_KEY_WEATHER, 'auto:ip');
  await checkInput(userLoc);
  animateElement('.main-icon', 'levitate', 'infinity');
  animateElement('.day-container', 'slide-in', 'once');
  fillSidebar(sideCities(worlds));
};

// SEARCH INPUT
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await checkInput(document.querySelector('#search').value);
  animateElement('.main-container', 'shake', 'once');
  animateElement('.day-container', 'slide-in', 'once');
});

// TEMPERATURE SCALE
const tempButton = document.querySelector('.temperature-button');
tempButton.addEventListener('click', () => {
  if (tempButton.textContent === 'Celcius') {
    tempButton.textContent = 'Fahrenheit';
  } else {
    tempButton.textContent = 'Celcius';
  }
  // TEMP VALUE (MAIN BODY)
  const temps = document.querySelectorAll('.temp');
  temps.forEach((temp) => temp.classList.toggle('hidden'));
  // TEMP ICON (MAIN BODY)
  const iconTemps = document.querySelectorAll('.temp-icon');
  iconTemps.forEach((iconTemp) => iconTemp.classList.toggle('hidden'));
  // TEMP VALUES (SIDEBAR)
  const sideTemps = document.querySelectorAll('.side-temp');
  sideTemps.forEach((sideTemp) => sideTemp.classList.toggle('hidden'));
});
// MEASUREMT SYSTEM
const sysButton = document.querySelector('.sys-measure-button');
const windMeasures = document.querySelectorAll('.wind');
sysButton.addEventListener('click', () => {
  if (sysButton.textContent === 'Metric') {
    sysButton.textContent = 'Imperial';
  } else {
    sysButton.textContent = 'Metric';
  }
  windMeasures.forEach((measure) => measure.classList.toggle('hidden'));
});

firstLoad();
