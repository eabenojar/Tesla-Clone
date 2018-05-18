var express = require("express");
var app = express();
//APP CONFIGURATION
//SET VIEW ENGINE FOR NODE.JS

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
  res.render("index");
});

app.get("/models", function(req,res){
  res.render("modelS")
})

app.get("/model3", function(req,res){
  res.render("model3");
})

app.get("/modelx", function(req,res){
  res.render("modelX");
})

app.get("/roadster", function(req,res){
  res.render("roadster");
})

const PORT = process.env.PORT
app.listen(PORT || 3000, console.log("APP STARTED ON PORT 3000"));
