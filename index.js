const express = require('express');
const app = express();
require('dotenv').config();
//const port = 3000;

const obj = {
    firstName: "Rishabh",
    lastName: "Verma"

};

app.get('/',(req,res)=>{

    res.send("Hello World");
});

app.get('/credentials',(req,res)=>{

    res.send(obj);

});

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
});