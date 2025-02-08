var express=require("express");
app=express();

app.get("/",function(req,res){
res.send("This is home page!")
});
app.put("/about",function(req,res){
 res.send("This is about page!")
 });
 app.post("/services",function(req,res){
  res.send("This is services page!")
  });
  app.delete("/blogs",function(req,res){
   res.send("This is blog page!")
   });
   


app.listen(8060,function(){
 console.log("Server Run 8080 Port")
})