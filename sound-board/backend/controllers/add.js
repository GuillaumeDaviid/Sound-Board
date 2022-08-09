const Sound = require('../models/Sound')

exports.add = (req, res, next) => {
    const addObject = JSON.parse(req.body.thing);
    const add = new Sound({
        ...addObject,
        name: req.body.name,
        soundUrl: `${req.protocol}://${req.get('host')}/public/${req.file.filename}`
    });
  
    add.save()
    .then(() => { res.status(201).json({message: 'Sound saved !'})})
    .catch(error => { res.status(400).json( { error })})
  };