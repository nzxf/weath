import './style.css';

const API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';
const API_KEY_GIPHY = '0aDlSjG2WKUWJKfdTJDwj2vLjFjhrn9z';

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
const img = elementMaker('img', content, '', 'img');

const callImage = async (apiKey,keyword) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${keyword}`
  );
  const imageData = await response.json()
//   console.log(imageData)
  img.src = imageData.data.images.original.webp
};

callImage(API_KEY_GIPHY, 'cats');
