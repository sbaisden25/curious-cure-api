var express = require("express");
var app = express();
cors = require('cors');
app.use(cors({
    progin: '*',
}));





const PORT = process.env.PORT || 8080;

const articles = require("./articles.json");

app.listen(PORT, () => {
 console.log("Server running on port 8080");
});


const url = "https://en.wikipedia.org/wiki/"

function random_article() {
    return articles[Math.floor(Math.random() * articles.length)];
}


app.get("/", (req, res) => {

    const article = url + random_article()
    const json = JSON.stringify({ article: article})
    res.send(json);
    
})

