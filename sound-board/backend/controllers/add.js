const Sound = require('../models/Sound')
const fs = require('fs');

exports.add = (req, res, next) => {
    const addObject = JSON.parse(req.body.thing);
    const add = new Sound({
        ...addObject,
        name: req.body.name,
        soundUrl: `${req.protocol}://${req.get('host')}/public/${req.file.filename}`
    });

    let fichier = fs.readFileSync('../src/data/data.json')
    let data = JSON.parse(fichier);
    data.push(req.body);
    let newData = JSON.stringify(data);
    fs.writeFileSync('../src/data/data.json', newData)
  
    add.save()
    .then(() => { res.status(201).json({message: 'Sound saved !'})})
    .catch(error => { res.status(400).json( { error })})
  };