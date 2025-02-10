const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.post('/',(req,res)=>{
 let siam=req.body;
 let su=JSON.stringify(siam);
 res.end(su);

});
app.listen(1010,()=>{
 console.log("Completed!")
});