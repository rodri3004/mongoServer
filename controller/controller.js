const {Cat} = require('../models/model')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}


const vistaGatitos = async (req, res) =>{
    try {
        const gatitos = await Cat.find()
        res.json({gatitos})
    } catch (error) {
        
    }
}

const crearGatito = async (req, res)=>{
    try {
        
        const kitty = new Cat({ name: 'Michi' });
        await kitty.save()
        console.log('meow')
        res.json({msg: 'meow'})
        
    } catch {
        
    }
    
}

module.exports = {vistaUno, crearGatito, vistaGatitos}