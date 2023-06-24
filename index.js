// A express server, which will handle api request which will handle api requests coming in and responde back with a json object, it will use body parser as well as cors.

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// set up the routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('example app listening') 
});