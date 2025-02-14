var express=require("express");
var app=express();

app.use((req,res,next)=>{
console.log("Hello World!")
 next();
});
app.get("/",(req,res)=>{
 res.send("This is Home Page!")
});
app.get("/contact",(req,res)=>{
res.send("This is Contact Page!")
});
app.get("/footer",(req,res)=>{
 res.send("This is Footer page")
});
app.listen(3232);