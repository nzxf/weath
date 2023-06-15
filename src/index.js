import './style.css';
import { worlds } from './worlds';
// import { colors } from './colors';
import { myFunctions } from './functions';

const elMaker = myFunctions.elementMaker;
const randomInbetween = myFunctions.randomInbetween;
const randomFromArray = myFunctions.randomFromArray;

const nowDate = () => {
  let day = date.getDate();
  let month = date.getMonth() - 1;
  let year = date.getFullYear();
  return `day/month/year`;
};

const tellIpAddress = async () => {
  const res = await fetch('https://api.ipify.org?format=json');
  const data = await res.json();
  return data.ip;
};

// API GEO IP
const API_KEY_GEOIP = '46788080029a430a3331b15c97285a3f';
const tellLocation = async (api, ipAddress) => {
  const url = 'http://api.ipstack.com/';
  const res = await fetch(`${url}${ipAddress}?access_key=${api}`);
  const data = await res.json();
  // console.log(data.city);
  return data;
};
// tellLocation('138.199.22.107');

// API WEATHER
const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';
const tellWeather = async (api, city) => {
  const url = 'https://api.weatherapi.com/v1/';
  const cors = { mode: 'cors' };
  const res = await fetch(`${url}current.json?key=${api}&q=${city}`, cors);
  const data = await res.json();
  // console.log(data);
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
// console.log(tellForecast(API_KEY_WEATHER, 'london', 7))

let tempIcon = `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;

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
    let cityData = await tellWeather(
      API_KEY_WEATHER,
      randomFromArray(worlds, 1)
    );
    // console.log('no city input, searching randomly');
    return fillMainBody(cityData);
  } else if (userInput === '') {
    return console.log('input invalid, empty');
  } else {
    let cityData = await tellWeather(API_KEY_WEATHER, userInput);
    // console.log('there is input. city:' + userInput);
    return fillMainBody(cityData);
  }
};
// checkInput()

const sidebar = document.querySelector('.sidebar');
function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    // const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    const sideContainer = elMaker('div', sidebar, 'side-container');
    // CITY & COUNTRY
    const sideCity = elMaker('span', sideContainer, 'side-city');
    sideCity.textContent = 'Bangkok, Thailand'; // `${data.location.name}, ${data.location.country}`,
    // ICON
    const sideIcon = elMaker('div', sideContainer, 'side-icon');
    sideIcon.style.backgroundImage = tempIcon;
    // TEMPERATURE
    const sideTemp = elMaker('span', sideContainer, 'side-temp');
    sideTemp.textContent = '31°C'; // `${data.current.temp_c}°`,
    // // WEATHER
    // const sideWeather = elMaker('div', sideContainer, 'side-weather');
    // sideWeather.textContent = 'Partly Cloudy'; // data.current.condition.text,
  }
}
fillSidebar(randomFromArray(worlds, 5));

function fillEndBody(howMany) {
  const endBody = document.querySelector('.end-body');
  for (let i = 0; i < howMany; i++) {
    const dayContainer = elMaker('div', endBody, 'day-container');
    // DATE & DAY
    const date = elMaker('div', dayContainer, `date-${i}`, 'dates');
    date.textContent = howMany + i;
    const day = elMaker('div', dayContainer, `day-${i}`, 'days');
    day.textContent = '(Tue)';
    // ICON
    const endIcon = elMaker('div', dayContainer, 'end-icon');
    endIcon.style.backgroundImage = tempIcon;
    // WEATHER CONDITION
    const endWeather = elMaker('div', dayContainer, 'end-weather');
    endWeather.textContent = 'Partly Cloudy';
  }
}
fillEndBody(7);

const form = document.querySelector('form');
const search = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput(search.value);
});

// TEMPERATURE SCALE & MEASUREMT SYSTEM
const tempButton = document.querySelector('.temperature-button');
const temps = document.querySelectorAll('.temp');
tempButton.addEventListener('click', () => {
  if (tempButton.textContent === 'Celcius') {
    tempButton.textContent = 'Fahrenheit';
  } else {
    tempButton.textContent = 'Celcius';
  }
  temps.forEach((temp) => temp.classList.toggle('hidden'));
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
