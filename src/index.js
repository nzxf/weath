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

function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    // const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    const sideContainer = elMaker('div', centerSidebar, 'side-container');
    // TEMPERATURE
    const sideTemp = elMaker('div', sideContainer, 'side-temp');
    sideTemp.textContent = '31°'; // `${data.current.temp_c}°`,
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
    endTemp.textContent = '24°';
  }
}
fillMainEnd(7);

function fillMainCenter(dataMain) {
  const centerMain = document.querySelector('.center-main');
  const mainContainer = elMaker('div', centerMain, 'main-container');
  // DATE & TIME
  const dateContainer = elMaker('div', mainContainer, 'date-container');
  const mainDate = elMaker('div', dateContainer, 'main-date');
  mainDate.textContent = '2/3/2023';
  // GEO ICON & CITY
  const geoContainer = elMaker('div', mainContainer, 'geo-container');
  elMaker('span', geoContainer, 'geo-icon');
  const mainCity = elMaker('span', geoContainer, 'main-city');
  mainCity.textContent = 'New York, United States';
  // MAIN ICON
  const mainIcon = elMaker('div', mainContainer, 'main-icon');
  const mainWeather = elMaker('div', mainContainer, 'main-weather');
  mainWeather.textContent = 'Sunny';
  // TEMPERATURE
  const temp = elMaker('div', mainContainer, 'main-temp');
  elMaker('div', temp, 'temp-icon', 'sub-icon');
  const tempText = elMaker('div', temp, 'sub-text');
  tempText.textContent = '23°C';
  // HUMIDITY
  const humid = elMaker('div', mainContainer, 'main-humidity');
  elMaker('div', humid, 'humid-icon', 'sub-icon');
  const humidText = elMaker('div', humid, 'sub-text');
  humidText.textContent = '80%';
  // WIND
  const wind = elMaker('div', mainContainer, 'main-wind');
  elMaker('div', wind, 'wind-icon', 'sub-icon');
  const windText = elMaker('div', wind, 'sub-text');
  windText.textContent = '22 kph';
  // HUMIDITY
  const uv = elMaker('div', mainContainer, 'main-uv');
  elMaker('div', uv, 'uv-icon', 'sub-icon');
  const uvText = elMaker('div', uv, 'sub-text');
  uvText.textContent = '5.0';
  // CLOUD
  const cloud = elMaker('div', mainContainer, 'main-cloud');
  elMaker('div', cloud, 'cloud-icon', 'sub-icon');
  const cloudText = elMaker('div', cloud, 'sub-text');
  cloudText.textContent = 'Clear';
}
fillMainCenter();
