const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

//Initlalazations
const app =express();
//settings
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',expbhs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs'
    
}));
app.set('view engine','.hbs');
//middleware
app.use(express.urlencoded({extend:false}));
app.use(express.json());


//routers
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(3000,()=>{
    console.log('Server on port',3000);
});