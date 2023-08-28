const express = require('express');
const path = require('path');
const port = 8080;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
// const contactList = [
//     {
//         name:'Udit Gupta',
//         number:'1234567890'
//     },
//     {
//         name:'Raj Malhotra',
//         number:'9873213984'
//     },
//     {
//         name:'Vikas Dubey',
//         number:'8265923628'
//     }
// ];
let contact_list = [];

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

app.get('/practise',async function(req,res){

    try {
        const contacts = await Contact.find({});
        res.render('practise', {
            title: 'Playground',
            contact_list: contacts
        });
    } catch (error) {
        console.log('Error:', error);
    }

    
});


app.post('/create-contact', async function(req, res) {
    try {
        let newEntry = {
            name: req.body.name,
            number: req.body.number
        };

        // Adding data to the database using the Contact model
        await Contact.create(newEntry);
        
        return res.redirect('/practise');  // Redirect to the practice page after adding data
    } catch (err) {
        console.log("Error while adding data to Contact List");
        return res.redirect('back');
    }
});


app.get('/delete-contact/',async function(req, res) {

    try{
        //get id from the query in the url
        let id = req.query.id;

        // find the contact in the database using id and delete it
         await Contact.findByIdAndDelete(id);
        return res.redirect('back');
    
    }catch (err){
        console('Error deleting the contact');
    }
});


app.listen(port,function(err){
    if(err)
    {
        console.log('Error is coming');
    }
    console.log('no error');
})