import './style.css';
import { worlds } from './worlds';
import { colors } from './colors';
import { myFunctions } from './functions';

const elementMaker = myFunctions.elementMaker;
const randomInbetween = myFunctions.randomInbetween;
const randomFromArray = myFunctions.randomFromArray;

console.log(randomInbetween(3, 6));

const tellIpAddress = async () => {
  const res = await fetch('https://api.ipify.org?format=json');
  const data = await res.json();
  return data.ip;
};

// API GEO IP
const API_KEY_GEOIP = '46788080029a430a3331b15c97285a3f';
const tellLocation = async (ipAddress) => {
  const url = 'http://api.ipstack.com/';
  const res = await fetch(`${url}${ipAddress}?access_key=${API_KEY_GEOIP}`);
  const data = await res.json();
  console.log(data.city);
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
};
const searchCity = async (api, input) => {
  const url = 'http://api.weatherapi.com/v1/';
  const res = await fetch(`${url}search.json?key=${api}&q=${input}`);
  const data = await res.json();
  console.log(data);
};
// console.log(tellWeather(API_KEY_WEATHER, 'indonesia'));
// tellWeather(API_KEY_WEATHER, 'depok');
// searchCity(API_KEY_WEATHER, 'jaka')

const content = document.querySelector('#content');
const main = document.querySelector('.main');
const cities = document.querySelectorAll('.city');

const centerSidebar = document.querySelector('.center-sidebar');

function fillSidebar(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    // const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    const sideContainer = elementMaker(
      'div',
      centerSidebar,
      '',
      'side-container'
    );
    sideContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;
    elementMaker(
      'div',
      sideContainer,
      // `${data.current.temp_c}°`,
      '31°',
      'side-temperature'
    );
    const sideIcon = elementMaker('div', sideContainer, '', 'side-icon');
    sideIcon.style.backgroundImage =
      // `url(${data.current.condition.icon})`
      `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;
    elementMaker(
      'span',
      sideContainer,
      // `${data.location.name}, ${data.location.country}`,
      'Madrid, Spain',
      'side-city'
    );
    elementMaker(
      'div',
      sideContainer,
      // data.current.condition.text,
      'Partly Cloudy',
      'side-weather'
    );
  }
}

fillSidebar(randomFromArray(worlds, 5));

const endMain = document.querySelector('.end-main');
function fillMainEnd(howMany) {
  for (let i = 0; i < howMany; i++) {
    const dayContainer = elementMaker('div', endMain, '', 'day-container');
    dayContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;
    elementMaker('div', dayContainer, `${howMany + i}`);
    const icon = elementMaker('div', dayContainer, '', 'end-icon');
    icon.style.backgroundImage = `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;
    elementMaker('div', dayContainer, '24°', 'end-temp');
  }
}
fillMainEnd(7);

const centerMain = document.querySelector('.center-main');
function fillMainCenter(cityName) {
  const mainContainer = elementMaker('div', centerMain, '', 'main-container');
  mainContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;
  // elementMaker('div', mainContainer, '12:45', 'main-time')
  // elementMaker('div', mainContainer, '2/3/2023', 'main-date')
  // GEO
  const topContainer = elementMaker('div', mainContainer, '', 'top-container');
  const geoIcon = elementMaker('span', topContainer, '', 'geo-icon');
  geoIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6421/6421001.png)';
  elementMaker(
    'span',
    topContainer,
    'San Francisco, United States',
    'main-city'
  );
  const mainIcon = elementMaker('div', mainContainer, '', 'main-icon');
  mainIcon.style.backgroundImage = `url(https://cdn-icons-png.flaticon.com/512/6421/6421095.png)`;
  elementMaker('div', mainContainer, 'Sunny', 'main-weather');
  // TEMPERATURE
  const temp = elementMaker('div', mainContainer, '', 'main-temp');
  const tempIcon = elementMaker('div', temp, '', 'sub-icon');
  tempIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6421/6421026.png)';
  elementMaker('div', temp, '23°C', 'sub-text');
  // HUMIDITY
  const humid = elementMaker('div', mainContainer, '', 'main-humidity');
  const humidIcon = elementMaker('div', humid, '', 'sub-icon');
  humidIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6421/6421090.png)';
  elementMaker('div', humid, '80%', 'sub-text');
  // WIND
  const wind = elementMaker('div', mainContainer, '', 'main-wind');
  const windIcon = elementMaker('div', wind, '', 'sub-icon');
  windIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6420/6420982.png)';
  elementMaker('div', wind, '22 kph', 'sub-text');
  // HUMIDITY
  const uv = elementMaker('div', mainContainer, '', 'main-uv');
  const uvIcon = elementMaker('div', uv, '', 'sub-icon');
  uvIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6420/6420898.png)';
  elementMaker('div', uv, '5.0', 'sub-text');
  // WIND
  const cloud = elementMaker('div', mainContainer, '', 'main-cloud');
  const cloudIcon = elementMaker('div', cloud, '', 'sub-icon');
  cloudIcon.style.backgroundImage =
    'url(https://cdn-icons-png.flaticon.com/512/6421/6421016.png)';
  elementMaker('div', cloud, 'clear', 'sub-text');
}
fillMainCenter();
