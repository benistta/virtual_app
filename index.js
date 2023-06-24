// A express server, which will handle api request which will handle api requests coming in and responde back with a json object, it will use body parser as well as cors.

const express = require('expresss');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});    