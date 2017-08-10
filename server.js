const express = require('express');
const app = express();
const path = require('path');

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
  response.status(200).json({"name": "Robbie"});
})

app.get('/sunsets', (request, response) => {
  response.status(200).json({"name": "Robbie"});
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
