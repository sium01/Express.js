var ex=require("express");
ap=ex();
ap.get("/",function(req,res){
res.send("This is Home Page!");
});
ap.get("/blogs",function(req,res){
res.send("This is blog page!")

});
ap.get("/about",function(req,res){
 res.send("This is about page!");
});
ap.get("/contact",function(req,res){
 res.send("This is Contact Page of the Software enginner!")
});
ap.listen(3030,function(){
console.log("Hello Babe!");
});