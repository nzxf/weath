const myFunctions = (() => {
  // RANDOM NUMBER BETWEEN TWO NUMBERS
  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  // GET A WEEK START FROM TOMORROW
  const aWeekFromTomorrow = () => {
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
    let index = daysOfWeek.indexOf(theDay) + 1;
    for (let i = index; i < daysOfWeek.length; i++) {
      result.push(daysOfWeek[i]);
    }
    for (let i = 0; i < index; i++) {
      result.push(daysOfWeek[i]);
    }
    return result;
  };
  // PICK A CITY FROM EACH CONTINENTS
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
  // TRANSLATE RAWDATE INTO PRESENTABLE DAY ( + TIME)
  const dayMaker = (dateString) => {
    let aDay = new Date(dateString);
    const optionsDay = { weekday: 'short', hour: 'numeric', minute: 'numeric' };
    return aDay.toLocaleDateString(undefined, optionsDay);
  };
  // TRANSLATE RAWDATE INTO PRESENTABLE DATE
  const dateMaker = (dateString) => {
    let aDate = new Date(dateString);
    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    return aDate.toLocaleDateString(undefined, optionsDate);
  };
  // TRANSLATE RAWDATE INTO PRESENTABLE TIME
  const timeMaker = (dateString) => {
    let aTime = new Date(dateString);
    const optionsTime = {hour: '2-digit', minute:'2-digit', hour12: false};
    return aTime.toLocaleTimeString(undefined,optionsTime)
  }
// FIND OUT IF DAY OR NIGHT 
  const dayOrNight = (timeString) => {
    if (parseInt(timeString) <= 6 || parseInt(timeString) >= 18) {
      return 'night';
    }
    return 'day';
  };

  // TRANSLATE WEATHER CODE INTO DATA IMAGE
  const weatherTranslator = (dayOrNight, code, keys, output) => {
    // NEUTRAL
    if (keys.storm.includes(code)) {
      return output.neutral.storm;
    }
    if (keys.mist.includes(code)) {
      return output.neutral.mist;
    }
    // DAY
    if (dayOrNight === 'day') {
      if (keys.clear.includes(code)) {
        return output.day.clear;
      }
      if (keys.cloud.includes(code)) {
        return output.day.cloud;
      }
      if (keys.rain.includes(code)) {
        return output.day.rain;
      }
      if (keys.snow.includes(code)) {
        return output.day.snow;
      }
    }
    // NIGHT
    if (dayOrNight === 'night') {
      if (keys.clear.includes(code)) {
        return output.night.clear;
      }
      if (keys.cloud.includes(code)) {
        return output.night.cloud;
      }
      if (keys.rain.includes(code)) {
        return output.night.rain;
      }
      if (keys.snow.includes(code)) {
        return output.night.snow;
      }
    }
    // NONE OF ABOVE
    return output.err;
  };
  // ADD ANIMATION TO ELEMENT
  const animateElement = (className, animationName, iteration = 'infinity') => {
    const targets = document.querySelectorAll(className);
    targets.forEach((target) => target.classList.add(animationName));
    if (iteration !== 'infinty') {
      targets.forEach((target) =>
        target.addEventListener('animationend', () => {
          target.classList.remove(animationName);
          target.classList.remove('outside');
        })
      );
    }
  };
  return {
    randomBetween,
    aWeekFromTomorrow,
    sideCities,
    dayMaker,
    dateMaker,
    timeMaker,
    dayOrNight,
    weatherTranslator,
    animateElement,
  };
})();

export { myFunctions };
