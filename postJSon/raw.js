let express=require("express");
let bodyParser=require("body-parser");
let app=express();
app.use(bodyParser.json());
app.post('/',(req,res)=>{
let siam=req.body;
let fju=JSON.stringify(siam);
res.send(fju);
});
app.listen(3013,()=>{
 console.log("Hello Raw Version!I love you so much")
});