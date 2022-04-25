var express = require("express");
var app = express();

const PORT = process.env.PORT || 8080;

const articles = require("./articles.json");

app.listen(PORT, () => {
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

