var express=require("express");
app=express();



app.post("/",(req,res)=>{

let fstName=req.query.fstName;
let midName = req.query.midName;
let lstName= req.query.lstName;
res.end(fstName+" "+ midName+" "+ lstName);
});

app.listen(4040,()=>{
 console.log("fill ur next steps!")
})