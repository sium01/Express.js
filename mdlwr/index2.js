var express=require("express");
var app=express();
app.get("/",(req,res)=>{
 res.send("Its Home page!")
});
app.use('/post',(req,res,next)=>{
 console.log("DOne");
 next();
})
app.get("/post",(req,res)=>{
 res.send("Posting Page!")
});
app.use('/cntct',(req,res,next)=>{
 console.log("Hello Babe!");
 next();
});
app.get('/cntct',(req,res)=>{
 res.send("cntct page!")
});
app.listen(5010);
