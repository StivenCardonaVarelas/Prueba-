const express = require('express');
const path = require('path');
const morgan= require('morgan');
const app= express();

app.use(morgan('dev'));
app.use(express.json());
//rutas
app.use('api/',require('./routes/persona'));
app.set("port",4001);
app.listen(app.get("port"),()=>{
console.log( `Servidor Corriendo en el puerto 4001`);
});


