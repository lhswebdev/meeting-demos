var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const fs = require('fs')
var localhtml = ""
localhtml += `<h1>Only submit memes from <a href="http://apimeme.com/">apimeme.com</a></h1><form action="/add" method=\"POST\"><input name="user" type="text" placeholder="User" required></input><input name="message" type="text" placeholder="message" required></input><input name="link" type="url" placeholder="apimeme.com link" required></input><input type="submit"></input></form>`;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', function (req, res) {
    res.send(getHTML())
})

app.post('/add', (req, res) => {
    user = req.body.user
    msg = req.body.message
    link = req.body.link
    appendToHTML(user, msg, link, res)
    res.redirect("/")
})

function appendToHTML (user, msg, link, res) {
    if (link == "") 
        link="http://apimeme.com/meme?meme=Angry-Asian&top=smh&bottom=did+not+even+try" //Deal with it 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎
    
    let url = (new URL(link))
    if (url.hostname !== "apimeme.com") {
        res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        trollLinks = ["https://i.giphy.com/media/SG5paY6WxH6Ki2lWys/giphy.webp", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F8f3aef5aa32e2d2c0f456f5ade7d3a1e%2Ftenor.gif%3Fitemid%3D8651088&f=1&nofb=1", "https://media1.tenor.com/images/a532deec8583f7d2726cc2f0f6515d87/tenor.gif?itemid=18400011", "https://media1.tenor.com/images/9817a6fcaa9eb5008532e9de40451428/tenor.gif?itemid=17034919", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F25.media.tumblr.com%2F7e0f2b63968230bd8dc6a325ae2bccd6%2Ftumblr_mvun0eLbdU1si10qqo1_500.gif&f=1&nofb=1"]
        toAppend = `<h3>${user} tried to submit an invalid link and paid the price! Get Rick-Rolled, ${user}!</h3><li><img src="${trollLinks[Math.floor(Math.random()*trollLinks.length)]}"></img></li>`
    }
    else {
        toAppend = `<h1>${user}</h1><li>${msg}</li><li><img src="${link}"></img></li>`
    }
    localhtml = localhtml + toAppend;
}


function getHTML() {
    return localhtml
}
// async function getHTML () {
//     try { 
//         // Using the filehandle method 
//         filehandle = await fs.promises.open('./index.html', 'r+'); 
//         var html = await filehandle.readFile("utf8"); 
//         console.log(html); 
        
//     } catch (e) { 
//         console.log("Error", e); 
//     }
//     return html
// }
app.listen(80, () => {
    console.log(`Example app listening at http://localhost:${80}`)
})