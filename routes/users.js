const express = require('express');
const router = express.Router(); 
const {vistaUsuario} = require('../controller/controller.js')

/* GET users listing. */
router.get('/', vistaUsuario);

module.exports = router;
