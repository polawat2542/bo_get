const express = require('express');
const path = require('path');
const moment = require('moment');
const cors =   require('cors');


const app = express();

const users = [
    {
        id : "1",
        name : "Polawat"
    },
    {
        id : "2",
        name : "Wat"
    },
    
]


const logger = (req,res,next) =>{
    console.log("Hello");
    next();
}

app.use(cors())
app.use(logger);
app.get('/api/users',(req,res) =>{
    res.json(users);
})
app.get('/',(req,res) => {
    res.send('hello World')
})
app.use(logger);

app.listen(8000);