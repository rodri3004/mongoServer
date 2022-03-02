const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaUsuario = (req, res)=>{
    res.send('respond with a resource');
}

module.exports = {vistaUno, vistaUsuario}