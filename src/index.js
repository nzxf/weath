import './style.css';

const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';

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
tellWeather(API_KEY_WEATHER, 'london');
// tellWeather(API_KEY_WEATHER, 'depok');
// searchCity(API_KEY_WEATHER, 'jaka')

const content = document.querySelector('#content');
const main = document.querySelector('.main');
const cities = document.querySelectorAll('.city');
cities.forEach(async (city) => {
  const data = await tellWeather(API_KEY_WEATHER, 'amsterdam');
  elementMaker('div', city, data.location.name);
  elementMaker('div', city, data.location.country);
  elementMaker('div', city, data.current.temp_c);
  elementMaker('div', city, data.current.condition.text);
  // elementMaker('div', city, data.current.wind_kph)
  // elementMaker('div', city, data.current.humidity)
});
