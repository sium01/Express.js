//Download-Response
var express=require("express");
app=express();



app.get("/",function(req,res){
 res.download("./pic/error.jpeg")
});


app.listen(4010,function(){
 console.log("server run success!")
});