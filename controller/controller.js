const {Cat} = require('../models/model')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaUsuario = async (req, res)=>{
    try {
       
        const kitty = new Cat({ name: 'Michi' });
        await kitty.save()
        console.log('meow')
        res.json({msg: 'meow'})
        
    } catch {
        
    }
    
}

module.exports = {vistaUno, vistaUsuario}