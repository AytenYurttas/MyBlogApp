const mongoose = require("mongoose"),
      express  = require ("express"),
      bodyParser =require("body-parser"),
      app      = express();


//Routes
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes= require("./routes/adminRoutes")

// App Config
app.set('view engine','ejs');
app.use(express.static('public'));

//Routes using
app.use(indexRoutes);
app.use(adminRoutes);


const server = app.listen(3000, (err)=>{
    if(err){
        console.log(err);}
    console.log('app started, Port number : %d', server.address().port);
})