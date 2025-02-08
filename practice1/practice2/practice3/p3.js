var express=require("express");
app=express();
app.get("/",function(req,res){
res.write("Hello")
});
app.listen(3020,function(){
 console.log("Server Run Success!")
});