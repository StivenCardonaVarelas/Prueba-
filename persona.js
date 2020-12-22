const{ Router}  = require ('express');
const router = Router();
const fs= require ('fs');

//leer archivo json
const personaFile=fs.readFileSync("./persona.json","utf-8");
let persona = JSON.parse(personaFile);

router.get('/',(req,res)=>{
    res.json('API REST PERSONA')

});
//APLICRUD






module.exports = router;
