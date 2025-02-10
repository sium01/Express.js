var express=require("express");
var multer=require("multer");
var app=express();
var multer=multer();
app.use(multer.array());
app.use(express.static('public'));
app.post('/',(req,res)=>{
let data=req.body;
res.send(JSON.stringify(data));
});
app.listen(2587);