const express = require('express');
const router = express.Router(); 
const {crearCelular, vistaCelulares, vistaUnCelu, editarCelular, borrarCelular, consultaAxios} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator');

router.get('/ver', vistaCelulares);
router.get('/ver/:id', vistaUnCelu);
router.get("/pokemon", consultaAxios)
router.post('/crear', [
    check('marca').not().isEmpty().withMessage("Debe colocar una marca"),
    check('modelo').not().isEmpty().withMessage("Debe colocar un modelo"),
    check('memoria').not().isEmpty().withMessage("Debe poner la cantidad de memoria"),
    check('resolucionCamara').not().isEmpty().withMessage("Debe poner los pixeles de la camara"),
    check('precio').not().isEmpty().withMessage("Debe colocarle un precio al celular")
], crearCelular);
router.put('/editar/:id', editarCelular);
router.delete('/eliminar/:id', borrarCelular);

module.exports = router;
