let express=require("express");
let bodyParser=require("body-parser");
let app=express();
app.use(bodyParser.json());
app.post("/",(req,res)=>{
 let siam=req.body;
 let name=siam.name;
 let city=siam.city;
 let pl=siam.pl;
 let prof=siam.prof;
 res.send(name+" "+prof+" "+city+" "+pl);
} );
app.listen(1010,()=>{
 console.log("Complete your TestCase!")
}) ;