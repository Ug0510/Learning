const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

app.set('view engine','ejs');
// app.set('views')


app.get('/',function(req,res){
    console.log(__dirname);
    res.send('Hi, Dear');
});

app.listen(port,function(err){
    if(err)
    {
        console.log('Error is coming');
    }
    console.log('no error');
})