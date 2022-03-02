
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect( process.env.MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        const Cat = mongoose.model('Cat', { name: String });

        /*const kitty = new Cat({ name: 'Zildjian' });
        kitty.save().then(() => console.log('meow'));
        console.log('Base de datos conectada');*/
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}

