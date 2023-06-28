// A express server, which will handle api request which will handle api requests coming in and responde back with a json object, it will use body parser as well as cors.

//copy openai Node.js package:

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-kx8e4puhUptTJ4M8NfLNcf9s",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// set up the routes

app.post('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.listen(port, () => {
    console.log('example app listening') 
});