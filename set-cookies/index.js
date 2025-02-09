var express=require("express");
app=express();


app.get("/",(req,res)=>{
res.cookie("name","siam")
res.cookie("age","20years");
res.cookie("bla","bra");
res.end("You're passed!");
});






app.listen(5023,function(){
console.log("Okay?")
});