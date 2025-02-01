var express=require("express");
app=express();
app.get("/",function(req,res){
res.send("Hello MoM.How're you?")
});
app.listen(4030,function(){
 console.log("Hello World!")
})