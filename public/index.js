const buttonContainer = document.querySelector('section')
const warnButton = document.querySelector('.warning-button');
const sunsetButton = document.querySelector('.sunset-button');

warnButton.addEventListener('click', () => {
  fetch('/json')
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('That was a bad idea ' + name)

    newDiv.className = 'bad-idea'
    newDiv.appendChild(newContent)

    buttonContainer.insertBefore(newDiv, sunsetButton)
  })
})
