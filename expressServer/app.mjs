//const express = require('express'); --> Para el archivo con extensión .js
import express from  'express'; // --> Para el archivo con extensión .mjs

const PORT = 3000;


const app = express(); 

app.get('/', (req, res)=>{
    res.send('Hello World!')
})



app.listen(PORT, ()=>{
    console.log(`El servidor se está ejecutando http://localhost:${PORT}`);
})