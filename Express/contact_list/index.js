const express = require('express');
const path = require('path');
const port = 8080;

const app = express();
const contactList = [
    {
        name:'Udit Gupta',
        number:'1234567890'
    },
    {
        name:'Raj Malhotra',
        number:'9873213984'
    },
    {
        name:'Vikas Dubey',
        number:'8265923628'
    }
];

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


app.get('/',function(req,res){
    return res.render('home',{title:'My Contact List'});
});

app.get('/practise',function(req,res){
    return res.render('practise',{
        title:'Playground',
        contact_list:contactList
    });
});

app.post('/create-contact',function(req,res){
    return res.redirect('/practise'); 
})

app.listen(port,function(err){
    if(err)
    {
        console.log('Error is coming');
    }
    console.log('no error');
})