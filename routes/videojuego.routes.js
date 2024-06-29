const express = require('express')
const videoJuegoRouter= express.Router();

//declaramos un objeto de nuestro modelo Videojuego

let videoJuego= require('../models/VideoJuego')

//Agregar un nuevo videojuego

videoJuegoRouter.route('/agregar').post((req,res)=>{
    videoJuego.create(req.body)
    .then((data)=>{
        console.log('Se inserto un documento')
        console.log(data)
        res.send(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//Obtener todos los videoJuegos de la base de datos

videoJuegoRouter.route('/videoJuegos').get((req,res)=>{
    videoJuego.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//Buscar un videojuego por su ID

videoJuegoRouter.route('/videoJuego/:id').get((req,res)=>{
    videoJuego.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//Actualizar videoJuego

videoJuegoRouter.route('/actualizar/:id').put((req,res)=>{
    videoJuego.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//Eliminar un videoJuego

videoJuegoRouter.route('/eliminar/:id').delete((req,res)=>{
    videoJuego.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se elimino correctamente')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

module.exports=videoJuegoRouter;