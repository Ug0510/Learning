const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


app.get('/',function(req,res){
    return res.render('home',{title:'My Contact List'});
});

app.get('/practise',function(req,res){
    return res.render('practise',{title:'Playground'});
});

app.listen(port,function(err){
    if(err)
    {
        console.log('Error is coming');
    }
    console.log('no error');
})