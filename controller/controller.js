const res = require('express/lib/response');
const {Celular} = require('../models/model');
const {check, validationResult, body} = require('express-validator');
const axios = require("axios");

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaCelulares = async (req, res) =>{
    const celulares = await Celular.find()
    res.json({celulares})
}

const vistaUnCelu = async (req, res) =>{
    const celu = await Celular.findById(req.params.id)
    res.json({celu})
}

const crearCelular = async (req, res) =>{
    const error = validationResult(req);
    if(error.isEmpty()) {
        const{marca,modelo,memoria,resolucionCamara,precio} = req.body;
        const celu = new Celular({marca,modelo,memoria,resolucionCamara,precio});
        await celu.save();
        res.json({celu, msg: 'Celular creado'});
    }else{
        res.json(error);
    }
}

const editarCelular = async (req,res) =>{
    const {id} = req.params;
    const {precio} = req.query;
    const celuModificado = await Celular.findByIdAndUpdate(id,precio);
    res.json(celuModificado);
}

const borrarCelular = async (req,res) =>{
    const celu = await Celular.findByIdAndDelete(req.params.id);
    res.json({msg: 'Celular eliminado',celu});
}

const consultaAxios = async (req,res) =>{
    const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto", { timeout: 10000}).catch((err) =>{
    err.origin = 'Error getting URL';
    throw err; 
});
res.json(resultado.data.game_indices[2]);
}

module.exports = {vistaUno, crearCelular, vistaCelulares, vistaUnCelu, editarCelular, borrarCelular, consultaAxios};