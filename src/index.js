import './style.css';
import { worlds } from './worlds';
// import { colors } from './colors';
import { myFunctions } from './functions';

const elMaker = myFunctions.elementMaker;
const randomBetween = myFunctions.randomBetween;
const randomFromArray = myFunctions.randomFromArray;

// GET A WEEK START FROM TOMORROW
const aWeekFromNow = () => {
  let result = [];
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let theDay = daysOfWeek[new Date().getDay()];
  let index = daysOfWeek.indexOf(theDay);
  for (let i = index; i < daysOfWeek.length; i++) {
    result.push(daysOfWeek[i].slice(0, 3));
  }
  for (let i = 0; i < index; i++) {
    result.push(daysOfWeek[i]);
  }
  return result;
};
const removeChildren = (parent) => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.children[0]);
  }
};

const sideCities = (data) => {
  let result = [];
  let max = 9;
  result.push(
    data.africanCities[randomBetween(0, max)],
    data.asianCities[randomBetween(0, max)],
    data.europeanCities[randomBetween(0, max)],
    data.northAmericanCities[randomBetween(0, max)],
    data.southAmericanCities[randomBetween(0, max)],
    data.australiaOceaniaCities[randomBetween(0, max)]
  );
  return result;
};

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
  // // DATE & TIME
  const mainDate = document.querySelector('.main-date');
  mainDate.textContent = cityData.location.localtime;
  // GEO ICON & CITY
  const mainCity = document.querySelector('.main-city');
  mainCity.textContent = `${cityData.location.name}, ${cityData.location.country}`;
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
const checkInput = async (userInput) => {
  if (!userInput) {
    return console.log('input invalid, empty');
  } else {
    let cityData = await tellForecast(API_KEY_WEATHER, userInput, 7);
    // console.log('there is input. city:' + userInput);
    fillMainBody(cityData);
    fillEndBody(cityData);
    // console.log(cityData.forecast)
  }
};
// checkInput()

const sidebar = document.querySelector('.sidebar');
async function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    const sideContainer = elMaker('div', sidebar, 'side-container');
    // CITY & COUNTRY
    const sideCity = elMaker('span', sideContainer, 'side-city');
    sideCity.textContent = data.location.name;
    const sideCountry = elMaker('span', sideContainer, 'side-country');
    sideCountry.textContent = data.location.country;
    // ICON
    const sideIcon = elMaker('div', sideContainer, 'side-icon');
    sideIcon.style.backgroundImage = tempIcon;
    // TEMPERATURE
    const sideTempC = elMaker('span', sideContainer, 'side-temp');
    sideTempC.textContent = `${data.current.temp_c} °C`;
    const sideTempF = elMaker('span', sideContainer, 'side-temp', 'hidden');
    sideTempF.textContent = `${data.current.temp_f} °F`;
  }
}
fillSidebar(sideCities(worlds));

function fillEndBody(rawData) {
  let dataArr = rawData.forecast.forecastday;
  let weekDays = aWeekFromNow();
  const endBody = document.querySelector('.end-body');
  removeChildren(endBody);
  for (let i = 0; i < dataArr.length; i++) {
    const dayContainer = elMaker('div', endBody, 'day-container');
    // DATE & DAY
    const date = elMaker('div', dayContainer, `date-${i}`, 'dates');
    date.textContent = dataArr[i].date.slice(8, 10);
    const day = elMaker('div', dayContainer, `day-${i}`, 'days');
    day.textContent = weekDays[i].slice(0, 3);
    // ICON
    const endIcon = elMaker('div', dayContainer, 'end-icon');
    endIcon.style.backgroundImage = tempIcon;
    // WEATHER
    const endWeather = elMaker('div', dayContainer, 'end-weather');
    endWeather.textContent = dataArr[i].day.condition.text;
  }
}

const form = document.querySelector('form');
const search = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput(search.value);
});

// TEMPERATURE SCALE & MEASUREMT SYSTEM
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
  let userLoc = await userFrom(API_KEY_WEATHER, 'auto:ip');
  return checkInput(userLoc);
};
firstLoad();
