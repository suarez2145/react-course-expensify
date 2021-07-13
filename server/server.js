
//defining 'path' from node so we can use the path methods below (EX: path.join)
const path = require('path');
const express = require('express');
const app = express();
//creating a varaible to store the path to our public folder (which is what we want our server to render)
const publicPath = path.join(__dirname, '..','public')

// the below process.env.PORT is the varaible that heroku gives us to dynamically choose  port to host our server on
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// telling our server what to do with 'get' requests that web users make 
// if they request a path that isnt in the 'public' folder we serve than return them the 'index.html' page
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// telling express what port to run our server on
// the second argument to .listen method is just an arrow function that runs a message we choose 
app.listen(port, () => {
    console.log('server is up!')
})