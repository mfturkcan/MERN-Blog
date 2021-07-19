require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Headers', '*',);
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    secure: true,
    saveUninitialized: true,
    name: "connectsid",
}));

app.use(passport.initialize());
app.use(passport.session());



// <-- Mongoose -->

// Connect mongoose

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

// Specify the schema 
const userSchema = mongoose.Schema({

});

userSchema.plugin(passportLocalMongoose);

// Create collection with schema
const User = mongoose.model("User", userSchema);


// <-- Passport local mongoose config -->

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.route("/")
    .get(function(req,res){
        console.log(req.body);
        res.send("Welcome to home page!");
    })
    .post(function(req,res){
        console.log(req);
        console.log(req.body);
    })

app.route("/login")
.get(function(req,res){
    console.log(req.body);
})
.post(function(req,res){
    if(req.isAuthenticated()){
        res.send(true);
    }else{
        const email = req.body.email;
    const password = req.body.password;
    
    const user = new User({
        username: email,
        password: password,
    });

    req.login(user, function(err){
        if(err){res.send(err); }
        else{
            var authenticate = User.authenticate();
            authenticate(email, password, function (err, result){
                if(err){ console.log(err); res.send(err); }
                else{
                    console.log(result); 
                    console.log("Successfully authenticated!");
                    res.send(true);
                }
            });
        }
    });
    }
})

app.route("/register")
.get(function(req,res){
    res.send(req.body);
})
.post(function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);

    User.register({username: email, active: false}, password, function(err, user){
        if(err){ console.log(err); res.send(err); }
        else{
            var authenticate = User.authenticate();
            authenticate(email, password, function (err, result){
                if(err){ console.log(err); res.send(err); }
                else{
                    console.log(result); 
                    console.log("Successfully authenticated!");
                    res.send(true);
                }
            });
        }
    });
});

app.get("/logout", function(req, res){
    req.logout();
    console.log(req.isAuthenticated());
    res.clearCookie('connectsid');
    res.send(true);
});


var listener = app.listen(4000, function(){
    console.log("Server has started at" + listener.address().port);
});