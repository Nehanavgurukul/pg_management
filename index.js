require('./connection/db');
const express = require("express");
const app = express();

app.use(express.json());

app.use('/', require('./routes'))

app.listen(process.env.PORT, (err)=>{
    if(err){
        throw err
    }else{
        console.log(`server is running on PORT : ${process.env.PORT}`);
    }
});