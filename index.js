const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aris:ArisElda21@cluster0-9phcz.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true}).
              then(()=>console.log('DB connected')).
              catch(err=>console.log(error));



app.get('/',(req,res)=>{
    res.send("Hello world");
});



app.listen(5000);