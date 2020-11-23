const express = require('express');
const path = require('path');
const hbs = require('hbs')
const App = express();

//creating port 
const Port = process.env.PORT || 8080;

const static_path = path.join(__dirname , "../public" );
const Template_path = path.join(__dirname , "../templates/views" );
const partial_path = path.join(__dirname , "../templates/partials" );
//static path
hbs.registerPartials(partial_path);
App.set('view engine','hbs');
App.set('views' ,Template_path);
App.use(express.static(static_path));
//routing
App.get("/",(req , res )=>{
    res.render("index");
});
App.get("/about",(req , res )=>{
    res.render('about');
});
App.get("/weather",(req , res )=>{
    res.render("weather");
});
App.get("*",(req , res )=>{
    res.render("404error");
});
App.listen(Port, ()=>{
    console.log(`Listning to port ${Port}`);
});