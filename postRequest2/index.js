let express=require("express");
app=express();

app.post("/",(req,res)=>{
let fstName=req.header("fstName");
let midName=req.header("midName");
let trdName=req.header("trdName");
res.end(fstName+""+midName+""+trdName)
});

app.listen(1023,()=>{
 console.log("Passed!")
});