const myFunctions = (() => {
  // ELEMENT MAKER
  const elementMaker = (type, parent, ...classNames) => {
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
    parent.appendChild(element);
    return element;
  };
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
  // REMOVE ALL CHILDREN ELEMENTS
  const removeChildren = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.children[0]);
    }
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

  return {
    elementMaker,
    randomBetween,
    aWeekFromNow,
    removeChildren,
    sideCities,
    dayMaker,
    dateMaker,
  };
})();

export { myFunctions };
