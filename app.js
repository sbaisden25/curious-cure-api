var express = require("express");
var app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

const articles = require("./articles.json");

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


const url = "https://en.wikipedia.org/wiki/"

function random_article() {
    return articles[Math.floor(Math.random() * articles.length)];
}

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/yo", (req, res) => {
    res.json.send(url + random_article())
})

