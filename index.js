
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config()
// console.log(process.env)

const configuration = new Configuration({
    organization: "org-kx8e4puhUptTJ4M8NfLNcf9s",
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());
app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `give me a list of the top 20 songs of all times
  
      Chatbot: I can provide you with a list of 20 iconic songs that have had a significant impact on music history:
      
      1) "Bohemian Rhapsody" - Queen
      2) "Imagine" - John Lennon
      3) "Hey Jude" - The Beatles
      4) "Like a Rolling Stone" - Bob Dylan
      5) "Smells Like Teen Spirit" - Nirvana
      6) "Hotel California" - Eagles
      7) "Stairway to Heaven" - Led Zeppelin
      8) "Johnny B. Goode" - Chuck Berry
      9) "I Will Always Love You" - Whitney Houston
      10) "Billie Jean" - Michael Jackson
      11) "Hallelujah" - Leonard Cohen
      12) "Thriller" - Michael Jackson
      13) "What's Going On" - Marvin Gaye
      14) "Boogie Woogie Bugle Boy" - The Andrews Sisters
      15) "Imagine" - Imagine Dragons
      16) "One" - U2
      17) "Rolling in the Deep" - Adele
      18) "Hey Ya!" - OutKast
      19) "Sweet Child o' Mine" - Guns N' Roses
      20) "Satisfaction" - The Rolling Stones
      
    Person: ive me a list of the 20  best songwriters in USA.
    Chatbot: I can provide you with a list of 20 highly regarded and influential songwriters from the United States who have made significant contributions to the music industry:
    
    1) Bob Dylan
    2) Carole King
    3) Paul Simon
    4) Joni Mitchell
    5) Stevie Wonder
    6) Bruce Springsteen
    7) Leonard Cohen
    8) Smokey Robinson
    9) James Taylor
    10) Prince
    11) Neil Young
    12) Dolly Parton
    13) Billy Joel
    14) Randy Newman
    15) John Lennon
    16) Johnny Cash
    17) Willie Nelson
    18) Brian Wilson
    19) Tom Waits
    20) Hank Williams
    
    Person: Give a list of the best 15 bars to watch concerts according with the state. 
    Chatbot: Here is a list of 15 bars across the United States known for hosting concerts and live music events:

    1) Troubadour - Los Angeles, California
    2)  The Fillmore - San Francisco, California
    3) Bowery Ballroom - New York City, New York
    4) The Bluebird Café - Nashville, Tennessee
    5) 9:30 Club - Washington, D.C.
    6) The Sinclair - Cambridge, Massachusetts
    7) Red Rocks Amphitheatre (Morrison) - Colorado
    8) Ryman Auditorium - Nashville, Tennessee
    9) The Continental Club - Austin, Texas
    10) First Avenue - Minneapolis, Minnesota
    11) Tipitina's - New Orleans, Louisiana
    12) Doug Fir Lounge - Portland, Oregon
    13) The Bitter End - New York City, New York
    14) The Troubadour - West Hollywood, California
    15) The Stone Pony - Asbury Park, New Jersey


    Person: ${message}?
    Chatbot:`,
    max_tokens: 200,
    temperature: 0,
  });

 console.log(response.data)
 if (response.data.choices[0]) {
  res.json({ message: response.data.choices[0].text });
 }

});


app.listen(port, () => {
console.log('Example app listening on port', port);
});