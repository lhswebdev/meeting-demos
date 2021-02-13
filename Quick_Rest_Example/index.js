var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var localhtml = "";

app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send(getHTML());
})

app.post('/add', (req, res) => {
    console.log(req.body)
    user = req.body.user;
    msg = req.body.message;
    appendToHTML(user, msg);
    res.redirect("/");
})

function appendToHTML (user, msg) {
    toAppend = `<h1>${user}</h1><li>${msg}</li>`;
    localhtml = localhtml + toAppend;
}

function getHTML () {
    return localhtml;
}
app.listen(80, () => {
    console.log(`Example app listening at http://localhost:${80}`)
  })