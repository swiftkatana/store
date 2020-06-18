require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt =require('bcrypt');
const mongoose = require("mongoose");
var cors = require('cors');
const multer = require("multer");
const fs = require('fs');
const path = require('path')


 const {User} = require("./src/models/User");
 const {Item} = require('./src/models/Item');

const app = express();


const saltPassword =10;
 
 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null,Date.now()+"-"+file.originalname);
    }
  });
  
  var upload = multer({ storage : storage }).any('photos',10);

  var dir = path.join(__dirname, 'public');

  app.use(express.static(dir));
  

  app.use("/uploads",express.static("uploads"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://84.108.78.137:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    next();
  });
  

  
mongoose.connect(process.env.DB_mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected to mongodb')).catch(error => console.log(error));



    
app.post("/register", (req, res) => {

    console.log(req.ip + " just register to our web ");
    
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.firstName;
    const userLastName = req.body.LastName;


    bcrypt.hash(password,saltPassword,(err,hash)=>{
        if(err){
            console.log(err);
            res.send(err.message);
        }



        const user = new User({
            userName:email,
        password:hash,
        firstName:username,
        lastName:userLastName,
        });

        user.save(err=>{
            if(err){
                console.log(err);
                if(err.code===11000)     res.send("dup");
               else res.send(err.message);
            }else{
                res.send(user);
            }

        });



    });


});



app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

  console.log(email  +" try to eneter")
    User.findOne({userName:email},(err,user)=>{
        if(err){
            console.log(err);
            res.send(err.message);
        }else{
            if(user){
                bcrypt.compare(password,user.password,(err,login)=>{
                    if(err){
                        console.log('eror')
                        console.log(err);
                        console.log(login)
                        res.send(err.message);
                    }else{
                       if(login)res.send(user);
                        else res.send('not good')
                    }

                });

            }
            else {
    console.log(req.ip + " just try login but not! ");
                
                res.send('not found')}
        }



    });
  
   
});
    

app.post("/additem",  function(req, res) {
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        };
      
        const newItem = new Item({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            kind:req.body.kind,
            brand:req.body.brand,
            cartCount:0,
            images:[...req.files]

        });
        newItem.save(err=>{
          if(err){
            console.log(err.message);
              if(err.code===11000)     res.send("dup");
             else res.send(err.message);
             }else
             {
                 console.log(newItem)
                res.send(newItem);
             };

        });
    
 
    });


});



    app.get('/items:whatItemth',(req,res)=>{
            console.log(req.params.whatItemth)
        Item.find({},(err,Items)=>{
            if(err){
                console.log(err)
                res.send(err)
            }
            res.send(Items);
            
        
        });


    });




app.get('/item:id',(req,res)=>{

const id =req.params.id;

    Item.findOne({_id:id},(err,foundItem)=>{
        if(err){
            console.log(err.message);
            res.send(err.message);
        }else{

            if(!foundItem){
                console.log('not found item');
                res.send('not found item')
            }else{
                res.send(foundItem);
            }

        }



    });


});







app.listen(process.env.PORT, () => {
    console.log("the server is listen to port " + process.env.PORT );
});