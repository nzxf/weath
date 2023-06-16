const myFunctions = (() => {
  // RANDOM NUMBER BETWEEN TWO NUMBERS
  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  // GET A WEEK START FROM TOMORROW
  const aWeekFromNow = () => {
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
    let index = daysOfWeek.indexOf(theDay);
    for (let i = index; i < daysOfWeek.length; i++) {
      result.push(daysOfWeek[i].slice(0, 3));
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
  // TRANSLATE RAWDATE INTO PRESENTABLE DAY & TIME
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
  // EXTRACT ONLY HOURS & MINUTES
  const extractTime = (string) => string.slice(11, 13) + string.slice(14, 16);
  // IS IT DAY OR NIGHT
  const dayOrNight = (string) => {
    if (parseInt(string) <= 600 || parseInt(string) >= 1800) {
      return 'night';
    }
    return 'day';
  };

  return {
    randomBetween,
    aWeekFromNow,
    sideCities,
    dayMaker,
    dateMaker,
    extractTime,
    dayOrNight,
  };
})();

export { myFunctions };
