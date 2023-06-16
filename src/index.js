import './style.css';
import { worlds } from './worlds';
// import { colors } from './colors';
import { myFunctions } from './functions';

const elMaker = myFunctions.elementMaker;
const aWeekFromNow = myFunctions.aWeekFromNow;
const removeChildren = myFunctions.removeChildren;
const sideCities = myFunctions.sideCities;
const dayMaker = myFunctions.dayMaker;
const dateMaker = myFunctions.dateMaker;

// API WEATHER
const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';
let tempIcon = `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;

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
  // // TEMPERATURE
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
  uv.textContent = cityData.current.uv;
  // CLOUD
  const cloud = document.querySelector('.cloud');
  cloud.textContent = `${cityData.current.cloud}%`;
}
function fillEndBody(cityData) {
  let dataArr = cityData.forecast.forecastday;
  let weekDays = aWeekFromNow();
  const endBody = document.querySelector('.end-body');
  removeChildren(endBody);
  for (let i = 0; i < dataArr.length; i++) {
    const dayContainer = elMaker('div', endBody, 'day-container');
    // DATE & DAY
    const date = elMaker('div', dayContainer, `date-${i}`, 'end-date');
    date.textContent = dataArr[i].date.slice(8, 10);
    const day = elMaker('div', dayContainer, `day-${i}`, 'end-day');
    day.textContent = weekDays[i].slice(0, 3);
    // ICON
    const endIcon = elMaker('div', dayContainer, 'end-icon');
    endIcon.style.backgroundImage = tempIcon;
    // WEATHER
    const endWeather = elMaker('div', dayContainer, 'end-weather');
    endWeather.textContent = dataArr[i].day.condition.text;
  }
}

async function checkInput(userInput) {
  if (!userInput) {
    return console.log('input invalid, empty');
  } else {
    let cityData = await tellForecast(API_KEY_WEATHER, userInput, 7);
    fillMainBody(cityData);
    fillEndBody(cityData);
  }
}

async function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    // CITY & COUNTRY
    const sideCity = document.querySelector(`.side-city-${i}`);
    sideCity.textContent = data.location.name;
    const sideCountry = document.querySelector(`.side-country-${i}`);
    sideCountry.textContent = data.location.country;
    // ICON
    const sideIcon = document.querySelector(`.side-icon-${i}`);
    sideIcon.style.backgroundImage = tempIcon;
    // TEMPERATURES
    const sideTempC = document.querySelector(`.side-temp-c-${i}`);
    sideTempC.textContent = `${data.current.temp_c} °C`;
    const sideTempF = document.querySelector(`.side-temp-f-${i}`, 'hidden');
    sideTempF.textContent = `${data.current.temp_f} °F`;
  }
}

// SEARCH INPUT
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = document.querySelector('#search');
  checkInput(search.value);
});

// TEMPERATURE SCALE
const tempButton = document.querySelector('.temperature-button');
tempButton.addEventListener('click', () => {
  if (tempButton.textContent === 'Celcius') {
    tempButton.textContent = 'Fahrenheit';
  } else {
    tempButton.textContent = 'Celcius';
  }
  const temps = document.querySelectorAll('.temp');
  const sideTemps = document.querySelectorAll('.side-temp');
  temps.forEach((temp) => temp.classList.toggle('hidden'));
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

const firstLoad = async () => {
  fillSidebar(sideCities(worlds));
  let userLoc = await userFrom(API_KEY_WEATHER, 'auto:ip');
  return checkInput(userLoc);
};
firstLoad();
