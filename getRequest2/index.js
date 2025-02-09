//"GET" request with  "Header"!



var express=require("express");
application=express();


application.get("/",(req,res)=>{
 let fstName=req.header("fstName");
 let scndName=req.header("scndName");
 let trdName=req.header("trdName");
 let Host=req.header("Host");
 let UserAgent=req.header("User-Agent")
 res.end(fstName+" "+scndName+" "+ trdName+""+Host+" "+ UserAgent);
 

})



application.listen(3011,  ()=>{
console.log("Completed.You can Run Next way!")
})