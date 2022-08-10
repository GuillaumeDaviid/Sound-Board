const express = require('express');

const app = express();
const fs = require('fs');

// middlewares

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/add',(req, res, next) => {
    let fichier = fs.readFileSync('../src/data/data.json')
    let data = JSON.parse(fichier);
    data.push(req.body);
    let newData = JSON.stringify(data);
    fs.writeFileSync('../src/data/data.json', newData)
})

app.use((req, res, next) => {
    res.json({message : 'Hello'});
    })


/* 
[
    {
        "id": "1",
        "name" : "il est de retour",
        "file": "/greg.mp3"
    },
    {
        "id": "2",
        "name" : "Alors peut etre",
        "file": "/alors.mp3"
    }
]
*/

module.exports = app;