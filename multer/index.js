let express=require("express");
let multer=require("multer");
 app=express();
  multer=multer();
app.use(multer.array());


app.use(express.static('public'));
app.post('/',(req,res)=>{
 let data=req.body;

 res.send(JSON.stringify(data));
});
app.listen(2531);