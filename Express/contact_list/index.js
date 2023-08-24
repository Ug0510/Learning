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
app.use(express.urlencoded());
app.use(express.static('assests'));

//making our own middleware1
app.use(function(req,res,next){
    req.myName = 'Udit';
    console.log('middleware1 is working');
    //next() tells the middleware or controller to move forward to next middleware or page
    next();
});

//making our own middleware2
app.use(function(req,res,next){
    console.log('middleware2 is working');
    console.log('my Name from middleware1 is',req.myName);
    //next() tells the middleware or controller to move forward to next middleware or page
    next();
});

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
    let newEntry = {
        name: req.body.name,
        number: req.body.number
    }
    contactList.push(newEntry);
    return res.redirect('/practise'); 
})

app.get('/delete-contact/', function(req, res) {
    console.log(req.query);
    let phone = req.query.phone;

    return res.redirect('/practise');
});


app.listen(port,function(err){
    if(err)
    {
        console.log('Error is coming');
    }
    console.log('no error');
})