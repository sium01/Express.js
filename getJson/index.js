let express=require("express");
let bodyParser=require("body-parser");
let app=express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
 let display=req.body;
let name=display.name;
let city=display.city;
let prof=display.prof;
let pl=display.pl;
res.send(name+""+prof+""+city+""+pl);
});
app.listen(2503,()=>{
 console.log("Hello Motherfucker Express js.I fuck You daily every moment!I fell very very boar.You killed my brain!")
});