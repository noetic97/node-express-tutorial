const express = require('express');
const app = express();
const path = require('path');
const data = require('./public/data')

//Middleware
const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log('DateTime: ', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  // response.send('Hello World');
});

app.get('/json', (request, response) => {
  response.status(200).json(data);
})

app.get('/sunsets', (request, response) => {
  response.status(200).json({"sunsets": ["http://www.sailingmontauk.com/montiki/wp-content/uploads/2013/05/Sunset051313.jpg", "http://www.arizona-leisure.com/gfx/gallery/sunsets/sedona-sunset.jpg", "https://i.ytimg.com/vi/P3kkc5193eY/maxresdefault.jpg", "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAArpAAAAJGE3NjBlZWMwLTQyYTEtNGE4My1iNjJlLWI3MjUxZTdmOTA2OQ.png"]});
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
