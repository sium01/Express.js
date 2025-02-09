//Simple String Response
var express=require("express");
app=express();


app.post("/one",function(req,res){
 res.send("Hello This is Simple String Response!")
});


app.get("/two",function(req,res){
 res.send("This is String no.2!")
});

//simple Response Status-Code
app.delete("/three",function(req,res){
 res.status(404).end("Error")
});



app.patch("/four",function(req,res){
 res.send("This is Patch File!")
});


app.options("/five",function(req,res){
 res.send("THis is Options")
});















app.listen(2020,function(){
 console.log("Server run success!")
});