require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const express = require("express");
const app = express()
const cors = require("cors");
const corsOptions = {
    origin: ("http://localhost:3000")
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "banana"]});
});

app.get('/oauth', (req, res) => {
    const csrfState = Math.random().toString(36).substring(2);
    res.cookie('csrfState', csrfState, { maxAge: 60000 });

    console.log(process.env.CLIENT_KEY);

    let url = 'https://www.tiktok.com/v2/auth/authorize/';


    // the following params need to be in `application/x-www-form-urlencoded` format.
    url += `?client_key=${process.env.CLIENT_KEY}`;
    url += '&scope=user.info.basic';
    url += '&response_type=code';
    url += '&redirect_uri={SERVER_ENDPOINT_REDIRECT}';
    url += '&state=' + csrfState;

    //res.redirect(url);
    res.json({fruits: ["apple", "banana"]});
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

