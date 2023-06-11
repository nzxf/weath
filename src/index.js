import './style.css';

const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';

const elementMaker = (type, parent, text, ...clasNames) => {
  const element = document.createElement(type);
  if (clasNames) {
    for (let i = 0; i < clasNames.length; i++) {
      element.classList.add(clasNames[i]);
    }
  }
  element.textContent = text;
  parent.appendChild(element);
  return element;
};

const content = document.querySelector('#content');

const tellWeather = async (api, city) => {
  const url = 'http://api.weatherapi.com/v1/';
  const res = await fetch(`${url}current.json?key=${api}&q=${city}`);
  const data = await res.json();
  console.log(data.current.condition.text);
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

// tellWeather(API_KEY_WEATHER, 'depok');

// searchCity(API_KEY_WEATHER, 'jaka')
