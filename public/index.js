const buttonContainer = document.querySelector('section')
const warnButton = document.querySelector('.warning-button');
const sunsetButton = document.querySelector('.sunset-button');

warnButton.addEventListener('click', () => {
  fetch('/json')
  .then(res => res.json())
  .then(data => {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('That was a bad idea ' + data.name)

    newDiv.className = 'bad-idea'
    newDiv.appendChild(newContent)

    buttonContainer.insertBefore(newDiv, sunsetButton)
  })
})

sunsetButton.addEventListener('click', () => {
  fetch('/sunsets')
  .then(res => res.json())
  .then(data => {
    const sunsetArray = data.sunsets;

    sunsetArray.map((imgSrc) => {
      let sunset = document.createElement('img');
      sunset.setAttribute("src", imgSrc)
      sunset.className = 'sunset-img'
      buttonContainer.insertBefore(sunset, sunsetButton.nextSibling)
    });
    buttonContainer.removeChild(warnButton)
    buttonContainer.removeChild(sunsetButton)
  });
})
