const express = require('express');
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
        destination: path.join(__dirname, 'public/upload'),//ditamina  la ubicacion del archivo
         filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

// initilizations
const app= express();
//setting
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
//multer middlewares
app.use(multer({
    storage,// deja las imagnes con su nombre original
    dest: path.join(__dirname, 'public/upload'),
    limits:{fileSize:1000000},//tamaño maximo de las imagenes 
    fileFilter: function (req, file, cb) {

             var filetypes = /jpeg|jpg|png|gif/;
              var mimetype = filetypes.test(file.mimetype);
              var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
               if (mimetype && extname) {
                   return cb(null, true);
               }
               cb("Error: File upload only supports the following filetypes - " + filetypes);
           }
    }).single('image'));
//Routes
app.get('/',(req, res) => {
    res.render('index');
});
app.post('/upload',(req, res) => {
    console.log(req.file);
    res.send('uploaded file');
});
//Static file
app.use(express.static(path.join(__dirname,'public')));
//start the  server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});