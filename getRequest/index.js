// "GET"Request with URL

var express=require("express");
app=express();


app.get("/",(req,res)=>{
let fn=req.query.fn;
let mn=req.query.mn;
let ln=req.query.ln;
res.end(fn+" "+mn+""+ln);

});




app.listen(3010,()=>{
 console.log("Done Babe!")
});