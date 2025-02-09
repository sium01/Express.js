var express=require("express");
app=express();






app.get("/", (req,res)=>{
res.cookie("n","siam");
res.cookie("id","2520000");
res.cookie("pass","1234");
res.cookie("em-type","1st-class");
res.status(404).end("Cookie clear")
});

app.get("/cl",(req,res)=>{
 res.clearCookie("n");
 res.clearCookie("pass");
 res.clearCookie("name")
 res.clearCookie("age")
res.clearCookie("bla")
res.clearCookie("em-type")
res.clearCookie("id")
 res.end("You're Passed")

});
app.listen(2120,()=>{
 console.log("Are you Ready?")
});