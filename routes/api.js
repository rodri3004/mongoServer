const express = require('express');
const router = express.Router(); 
const {vistaGatitos} = require('../controller/controller.js')

/* GET users listing. */
router.get('/', vistaGatitos);

module.exports = router;
