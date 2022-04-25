var express = require("express");
var app = express();

const articles = require("./articles.json");

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


const url = "https://en.wikipedia.org/wiki/"

function random_article() {
    return articles[Math.floor(Math.random() * articles.length)];
}


app.get("/random_article", (req, res) => {
    res.json(url + random_article())
})

