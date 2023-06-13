import './style.css';
import { worlds } from './worlds';
// import { colors } from './colors';
import { myFunctions } from './functions';

const elementMaker = myFunctions.elementMaker;
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
    const sideContainer = elementMaker(
      'div',
      centerSidebar,
      '',
      'side-container'
    );
    elementMaker(
      'div',
      sideContainer,
      // `${data.current.temp_c}°`,
      '31°',
      'side-temperature'
    );
    const sideIcon = elementMaker('div', sideContainer, '', 'side-icon');
    sideIcon.style.backgroundImage = tempIcon;
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
    elementMaker('div', dayContainer, `${howMany + i}`);
    const endIcon = elementMaker('div', dayContainer, '', 'end-icon');
    endIcon.style.backgroundImage = tempIcon;
    elementMaker('div', dayContainer, '24°', 'end-temp');
  }
}
fillMainEnd(7);

const centerMain = document.querySelector('.center-main');
function fillMainCenter(cityName) {
  const mainContainer = elementMaker('div', centerMain, '', 'main-container');
  // DATE & TIME
  const dateContainer = elementMaker(
    'div',
    mainContainer,
    '',
    'date-container'
  );
  elementMaker('div', dateContainer, '2/3/2023', 'main-date');
  elementMaker('div', dateContainer, '12:45', 'main-time');
  // GEO
  const geoContainer = elementMaker('div', mainContainer, '', 'geo-container');
  const geoIcon = elementMaker('span', geoContainer, '', 'geo-icon');
  elementMaker('span', geoContainer, 'New York, United States', 'main-city');
  const mainIcon = elementMaker('div', mainContainer, '', 'main-icon');
  elementMaker('div', mainContainer, 'Sunny', 'main-weather');
  // TEMPERATURE
  const temp = elementMaker('div', mainContainer, '', 'main-temp');
  const tempIcon = elementMaker('div', temp, '', 'temp-icon', 'sub-icon');
  elementMaker('div', temp, '23°C', 'sub-text');
  // HUMIDITY
  const humid = elementMaker('div', mainContainer, '', 'main-humidity');
  const humidIcon = elementMaker('div', humid, '', 'humid-icon', 'sub-icon');
  elementMaker('div', humid, '80%', 'sub-text');
  // WIND
  const wind = elementMaker('div', mainContainer, '', 'main-wind');
  const windIcon = elementMaker('div', wind, '', 'wind-icon', 'sub-icon');
  elementMaker('div', wind, '22 kph', 'sub-text');
  // HUMIDITY
  const uv = elementMaker('div', mainContainer, '', 'main-uv');
  const uvIcon = elementMaker('div', uv, '', 'uv-icon', 'sub-icon');
  elementMaker('div', uv, '5.0', 'sub-text');
  // WIND
  const cloud = elementMaker('div', mainContainer, '', 'main-cloud');
  const cloudIcon = elementMaker('div', cloud, '', 'cloud-icon', 'sub-icon');
  elementMaker('div', cloud, 'clear', 'sub-text');
}
fillMainCenter();
