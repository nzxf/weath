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
  // RANDOM FROM ARRAY
  const randomFromArray = (arr, howMany) => {
    let result = [];
    while (result.length < howMany) {
      let random = randomBetween(0, arr.length - 1);
      if (!result.includes(random)) {
        result.push(arr[random]);
      }
    }
    return result;
  };

  return { elementMaker, randomBetween, randomFromArray };
})();

export { myFunctions };
