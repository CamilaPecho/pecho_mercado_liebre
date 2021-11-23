const express = require('express');
const app = express();
app.use(express.static('public'));

//(etiqueta lo pisa la clase y la clase la pisa el id) 
app.listen (process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});