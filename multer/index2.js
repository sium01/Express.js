var express=require("express");
var multer=require("multer");
var app=express();





var storage=multer.diskStorage({
 destination:function(req,file,callBack){
  callBack(null,'./uploads');
 },
 filename:function(req,file,callBack){
  callBack(null,file.originalname)
 }
});
var upload=multer({storage:storage}).single('myfile')
app.post('/',function(req,res){
upload(req,res,function(error){
 if(error){
res.send("failed")
 }else{
res.send("Success!")
 }
});
});
app.listen(2533,()=>{
 console.log("D0ne!")
});