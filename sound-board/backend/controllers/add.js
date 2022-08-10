const Sound = require('../models/Sound')
const fs = require('fs');

exports.add = (req, res, next) => {
    let fichier = fs.readFileSync('../src/data/data.json')
    let data = JSON.parse(fichier);
    data.push(req.body);
    fs.writeFileSync('../src/data/data.json', data)
    .then(() => { res.status(200).json({message: 'Sound saved !'})})
    .catch(error => { res.status(400).json( { error })})
  };