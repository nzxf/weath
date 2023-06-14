import './style.css';
import { worlds } from './worlds';
// import { colors } from './colors';
import { myFunctions } from './functions';

const elMaker = myFunctions.elementMaker;
const randomInbetween = myFunctions.randomInbetween;
const randomFromArray = myFunctions.randomFromArray;

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
  const url = 'http://api.weatherapi.com/v1/';
  const res = await fetch(`${url}current.json?key=${api}&q=${city}`);
  const data = await res.json();
  // console.log(data.current.condition.text);
  return data;
};
const tellForecast = async (api, zipcode, days) => {
  const url = 'http://api.weatherapi.com/v1/';
  const res = await fetch(
    `${url}forecast.json?key=${api}&q=${zipcode}&days=${days}`
  );
  const data = await res.json();
  return data;
};
const searchCity = async (api, input) => {
  const url = 'http://api.weatherapi.com/v1/';
  const res = await fetch(`${url}search.json?key=${api}&q=${input}`);
  const data = await res.json();
  // console.log(data);
  return data;
};

const centerSidebar = document.querySelector('.center-sidebar');

let tempIcon = `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;

function fillMainCenter(dataMain) {
  const mainContainer = document.querySelector('.main-container');
  // DATE & TIME
  const mainDate = document.querySelector('.main-date');
  mainDate.textContent = '2/3/2023';
  // GEO ICON & CITY
  const mainCity = document.querySelector('.main-city');
  mainCity.textContent = 'New York, United States';
  // MAIN WEATHER
  const mainWeather = document.querySelector('.main-weather');
  mainWeather.textContent = 'Sunny';
  // TEMPERATURE
  const temp = document.querySelector('.temp');
  temp.textContent = '23°C';
  // HUMIDITY
  const humid = document.querySelector('.humid');
  humid.textContent = '80%';
  // WIND
  const wind = document.querySelector('.wind');
  wind.textContent = '22 kph';
  // UV
  const uv = document.querySelector('.uv');
  uv.textContent = '5.0 UV';
  // CLOUD
  const cloud = document.querySelector('.cloud');
  cloud.textContent = 'Clear';
}
fillMainCenter();


function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    // const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    const sideContainer = elMaker('div', centerSidebar, 'side-container');
    // TEMPERATURE
    const sideTemp = elMaker('div', sideContainer, 'side-temp');
    sideTemp.textContent = '31°C'; // `${data.current.temp_c}°`,
    // ICON
    const sideIcon = elMaker('div', sideContainer, 'side-icon');
    sideIcon.style.backgroundImage = tempIcon;
    // CITY & COUNTRY
    const sideCity = elMaker('span', sideContainer, 'side-city');
    sideCity.textContent = 'Madrid, Spain'; // `${data.location.name}, ${data.location.country}`,
    // WEATHER
    const sideWeather = elMaker('div', sideContainer, 'side-weather');
    sideWeather.textContent = 'Partly Cloudy'; // data.current.condition.text,
  }
}

fillSidebar(randomFromArray(worlds, 5));

function fillMainEnd(howMany) {
  const endMain = document.querySelector('.end-main');
  for (let i = 0; i < howMany; i++) {
    const dayContainer = elMaker('div', endMain, 'day-container');
    // DATE & DAY
    const day = elMaker('div', dayContainer, `day-${i}`, 'days');
    day.textContent = howMany + i + '(Tue)';
    // ICON
    const endIcon = elMaker('div', dayContainer, 'end-icon');
    endIcon.style.backgroundImage = tempIcon;
    // TEMPERATURE
    const endTemp = elMaker('div', dayContainer, 'end-temp');
    endTemp.textContent = '24°C';
  }
}
fillMainEnd(7);



const form = document.querySelector('form');
const search = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(search.value);
});

// TEMPERATURE SCALE & MEASUREMT SYSTEM
const tempButton = document.querySelector('.temperature-button');
tempButton.addEventListener('click', () => {
  if (tempButton.textContent === 'celcius') {
    tempButton.textContent = 'fahrenheit';
  } else {
    tempButton.textContent = 'celcius';
  }
});
const sysButton = document.querySelector('.sys-measure-button');
sysButton.addEventListener('click', () => {
  if (sysButton.textContent === 'metric') {
    sysButton.textContent = 'imperial';
  } else {
    sysButton.textContent = 'metric';
  }
});
