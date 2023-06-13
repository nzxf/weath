import { worlds } from './worlds';
import './style.css';

const elementMaker = (type, parent, text = '', ...classNames) => {
  if (!type || typeof type !== 'string') {
    throw new Error(`Invalid value for 'type' parameter`);
  }
  if (!(parent instanceof Element)) {
    throw new Error(`'parent' parameter must be valid DOM element`);
  }
  const element = document.createElement(type);
  if (classNames.length > 0) {
    classNames.forEach((className) => element.classList.add(className));
  }
  if (typeof text === 'string' && text !== '') {
    element.textContent = text;
  }
  parent.appendChild(element);
  return element;
};
const randomizer = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
const randomCities = (arr, howMany) => {
  let result = [];
  for (let i = 0; i < howMany; i++) {
    let random = randomizer(0, arr.length - 1);
    result.push(arr[random]);
  }
  return result;
};

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
let colors = {
  blue: ['#CFE4FF', '#4CB6FE'],
  blue2: ['#BBDEFB', '#2196F3'],
  orange: ['#FFD54F', '#FFB900'],
  green: ['#C8E6C9', '#66BB6A'],
  green2: ['#DCEDC8', '#689F38'],
  red: ['#FCE4EC', '#EC407A'],
  purple: ['#E1BEE7', '#9C27B0'],
  yellow: ['#FFEB3B', '#FBC02D'],
  black: ["#757575", "#212121"],
};
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
      'side-condition'
    );
  }
}

fillSidebar(randomCities(worlds, 5));

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
  const mainCity = elementMaker('div', centerMain, '', 'main-city');
  mainCity.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;
  // elementMaker('div', mainCity, '12:45', 'main-time')
  // elementMaker('div', mainCity, '2/3/2023', 'main-date')
  elementMaker('div', mainCity, 'San Francisco, United States')
  elementMaker('div', mainCity, 'icon', 'main-icon')
  elementMaker('div', mainCity, 'Sunny', 'main-weather')
  elementMaker('div', mainCity, 'Temperature', 'main-temp')
  elementMaker('div', mainCity, 'Humidity', 'main-humidity')
  elementMaker('div', mainCity, 'wind', 'main-wind')
}
fillMainCenter()