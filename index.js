const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')



// conectar a la BD
//Conexion local
mongoose.connect('mongodb://127.0.0.1:27017/videojuegos')
//Conexion ATTLAS
//mongoose.connect('mongodb+srv://angelaoti21:SWxEXmspNgKUjr6I@games.veprrnb.mongodb.net/videojuegos?retryWrites=true&w=majority&appName=Games')
.then((x)=>{
      console.log(`Conectado a la base de datos: '${x.connections[0].name}'`)
})
.catch((error)=>{
    console.log('Error de conexion',error.reason)
})

//servidor web

const videoJuegoRouter = require('./routes/videojuego.routes')
const { createErrorClass } = require('rxjs/internal/util/createErrorClass')
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false,
    })
)

app.use(cors())
app.use('/api',videoJuegoRouter)

//habilitar el puerto
const port = process.env.PORT || 4000
const server = app.listen(port,()=> {
    console.log('Servidor escuchando en el puerto: '+port)

})

// manejador de errores 404

app.use((req,res)=>{
    next(createError(404))
})

// manejador de errores

app.use(function(err,res,next){
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
    
})