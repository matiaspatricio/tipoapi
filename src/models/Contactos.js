const mongoose = require('mongoose');

const ContactosSchema = new mongoose.Schema({    
    nombre:String,
    email:String,
    asunto:String,
    mensaje:String
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;