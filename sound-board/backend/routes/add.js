const express = require('express');
const router = express.Router();

const addCtrl = require('../controllers/add');

router.post('/add', addCtrl.add);


module.exports = router;