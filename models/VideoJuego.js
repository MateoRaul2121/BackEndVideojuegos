const mongoose = require('mongoose')
const Schema = mongoose.Schema

let VideoJuego = new Schema({
    titulo: {
        type:String
    },
    clasificacion: {
        type:String
    },
    desarrolladora: {
        type:String
    },
    descripcion:{
        type:String
    },
    precio: {
        type:Number
    },
    

},{
    collection: 'videoJuegos'
})

module.exports = mongoose.model('VideoJuego',VideoJuego);
