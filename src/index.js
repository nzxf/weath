import './style/main.css';
import './style/topBar.css';
import './style/bottomBar.css';
import './style/sideBar.css';
import './style/media.css';
import './style/animation.css';

import { icons } from './data/weatherIcons';
import { keys } from './data/weatherKeys';
import { worlds } from './data/worlds';

import { myFunctions } from './functions';

const getEl = myFunctions.getEl
const getEls = myFunctions.getEls
const tellWeather = myFunctions.tellWeather
const tellForecast = myFunctions.tellForecast
const tellUserLoc = myFunctions.tellUserLoc
const aWeekFromTomorrow = myFunctions.aWeekFromTomorrow;
const sideCities = myFunctions.sideCities;
const dayMaker = myFunctions.dayMaker;
const dateMaker = myFunctions.dateMaker;
const timeMaker = myFunctions.timeMaker;
const dayOrNight = myFunctions.dayOrNight;
const weatherTranslator = myFunctions.weatherTranslator;
const animateElement = myFunctions.animateElement;
const inOut = myFunctions.inOut

// API WEATHER (NOT SECURE?)
const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';

const fillMainBody = (cityData)=> {
  //  MAIN ICON
  let localTime = dayOrNight(timeMaker(cityData.location.localtime));
  let weatherCode = cityData.current.condition.code;
  let weatherIcon = weatherTranslator(localTime, weatherCode, keys, icons);
  const mainIcon = getEl('.main-icon');
  mainIcon.style.backgroundImage = `url(${weatherIcon}`;
  // CITY
  const mainCity = getEl('.main-city');
  mainCity.textContent = cityData.location.name;
  // COUNTRY
  const mainCountry = getEl('.main-country');
  mainCountry.textContent = cityData.location.country;
  // // LOCALE DATE
  const mainDate = getEl('.main-date');
  mainDate.textContent = dateMaker(cityData.location.localtime);
  // // LOCALE TIME
  const mainTime = getEl('.main-time');
  mainTime.textContent = dayMaker(cityData.location.localtime);
  // // MAIN WEATHER
  const mainWeather = getEl('.main-weather');
  mainWeather.textContent = cityData.current.condition.text;
  // // TEMPERATURES
  const tempC = getEl('.temp-celcius');
  tempC.textContent = `${cityData.current.temp_c} °C`;
  const tempF = getEl('.temp-fahrenheit');
  tempF.textContent = `${cityData.current.temp_f} °F`;
  // // HUMIDITY
  const humid = getEl('.humid');
  humid.textContent = `${cityData.current.humidity}%`;
  // // WIND
  const windMet = getEl('.wind-metric');
  windMet.textContent = `${cityData.current.wind_mph} mph`;
  const windImp = getEl('.wind-imperial');
  windImp.textContent = `${cityData.current.wind_kph} kph`;
  // UV
  const uv = getEl('.uv');
  uv.textContent = `${cityData.current.uv}.0`;
  // CLOUD
  const cloud = getEl('.cloud');
  cloud.textContent = `${cityData.current.cloud}%`;
}
const fillBottomBar = (cityData) => {
  let dataArr = cityData.forecast.forecastday;
  dataArr.shift(); // FIRST DAY ALREADY SHOWN IN MAINBODY
  let weekDays = aWeekFromTomorrow();
  for (let i = 0; i < 7; i++) {
    // DATE
    const date = getEl(`.end-date-${i}`);
    date.textContent = dataArr[i].date.slice(8, 10);
    // DAY
    const day = getEl(`.end-day-${i}`);
    day.textContent = weekDays[i].slice(0, 3);
    // ICON
    let weatherCode = dataArr[i].day.condition.code;
    let weatherIcon = weatherTranslator('day', weatherCode, keys, icons);
    const icon = getEl(`.end-icon-${i}`);
    icon.style.backgroundImage = `url(${weatherIcon})`;
    // WEATHER
    const weather = getEl(`.end-weather-${i}`);
    weather.textContent = dataArr[i].day.condition.text;
  }
}
const fillSidebar = async (cityArray)=> {
  for (let i = 0; i < cityArray.length; i++) {
    const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);
    // CITY
    const sideCity = getEl(`.side-city-${i}`);
    sideCity.textContent = data.location.name;
    // COUNTRY
    const sideCountry = getEl(`.side-country-${i}`);
    sideCountry.textContent = data.location.country;
    // ICON
    let localTime = dayOrNight(timeMaker(data.location.localtime));
    let weatherCode = data.current.condition.code;
    let weatherIcon = weatherTranslator(localTime, weatherCode, keys, icons);
    const sideIcon = getEl(`.side-icon-${i}`);
    sideIcon.style.backgroundImage = `url(${weatherIcon})`;
    // TEMPERTATURE CELCIUS
    const sideTempC = getEl(`.side-temp-c-${i}`);
    sideTempC.textContent = `${data.current.temp_c} °C`;
    // TEMPERTATURE FAHRENHEIT
    const sideTempF = getEl(`.side-temp-f-${i}`, 'none');
    sideTempF.textContent = `${data.current.temp_f} °F`;
    // LOCAL TIME
    const sideTime = getEl(`.side-time-${i}`);
    sideTime.textContent = dayMaker(data.location.localtime);
  }
}
const clearMainBody = () => {
  // ICON
  getEls('main-icon', 'sub-icon').forEach(
    (el) => (el.style.backgroundImage = 'none')
  );
  // RESTS
  getEls(
    '.main-city',
    '.main-country',
    '.main-date',
    '.main-time',
    '.main-weather',
    '.temp',
    '.humid',
    '.wind',
    '.uv',
    '.cloud'
  ).forEach((el) => (el.textContent = ''));
};
const clearBottomBar = () => {
  // ICON
  getEls('.end-icon').forEach((el) => (el.style.backgroundImage = 'none'));
  // RESTS
  getEls('.end-date', '.end-day', '.end-weather').forEach(
    (el) => (el.textContent = '')
  );
};
const lostCity = (userInput) => {
  // TEXT
  getEl('.main-city').textContent = 'Sorry';
  getEl(
    '.main-country'
  ).textContent = `We cannot find a place named ${userInput}`;
  getEl('.main-weather').textContent = 'Bring this just to be safe';
  // IMAGES
  getEl('.main-icon').style.backgroundImage = `url(${icons.lost})`;
  getEls('.sub-container').forEach((el) => el.classList.add('none'));
  getEls('.end-icon').forEach((el) => el.classList.add('hidden'));
  inOut('.day-container');
};

const checkInput = async(userInput)=> {
  let cityData = await tellForecast(API_KEY_WEATHER, userInput, 8);
  inOut('.day-container');
  // BAD REQUEST
  if (cityData === 400) {
    clearMainBody();
    clearBottomBar();
    return lostCity(userInput);
  }
  // GOOD REQEUST
  getEls('.sub-container').forEach((el) => el.classList.remove('none'));
  getEls('.end-icon').forEach((el) => el.classList.remove('hidden'));

  fillMainBody(cityData);
  fillBottomBar(cityData);
}
const firstLoad = async () => {
  let userLoc = await tellUserLoc(API_KEY_WEATHER, 'auto:ip');
  await checkInput(userLoc);
  fillSidebar(sideCities(worlds));
};

// ALL EVENTS
// SEARCH INPUT
const handleForm = async (event) => {
  event.preventDefault();
  // VALIDATION
  const search = getEl('#search');
  if (search.value === '') {
    // NOTICE
    search.placeholder = "Can't be empty";
    search.style.color = 'yellow';
    return setTimeout(() => {
      // BACK DEFAULT
      search.placeholder = 'Enter a city';
      search.style.color = 'inherit';
    }, 2000);
  }
  // PROCEED
  await checkInput(search.value);
  animateElement('.main-container', 'shake', 'once');
}
const form = getEl('form');
form.addEventListener('submit', handleForm);
// TEMPERATURE SCALE
const handleTempButton = () => {
  if (tempButton.textContent === 'Celcius') {
    tempButton.textContent = 'Fahrenheit';
  } else {
    tempButton.textContent = 'Celcius';
  }
  // TEMPS (MAINBODY & SIDEBAR)
  const temps = getEls('.temp', '.temp-icon', '.side-temp');
  temps.forEach((temp) => temp.classList.toggle('none'));
}
const tempButton = getEl('.temperature-button');
tempButton.addEventListener('click', handleTempButton);
// MEASUREMT SYSTEM
const handleSysButton = () => {
  if (sysButton.textContent === 'Metric') {
    sysButton.textContent = 'Imperial';
  } else {
    sysButton.textContent = 'Metric';
  }
  const winds = getEls('.wind');
  winds.forEach((wind) => wind.classList.toggle('none'));
};
const sysButton = getEl('.sys-measure-button');
sysButton.addEventListener('click', handleSysButton);


window.onload = firstLoad();