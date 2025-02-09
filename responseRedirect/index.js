let express=require("express");
app=express();
app.get("/",function(req,res){
 res.send("Hell")
});
app.get("/siam",function(req,res){
 res.redirect("http://localhost:5010/frjna")
});
app.get("/frjna",function(req,res){
 res.send("Asslamo Alaikom! This is Farjana. ")
});
app.listen(5010,function(){
 console.log("done!")
})