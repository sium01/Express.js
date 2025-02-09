let express=require("express");
app=express();

app.get("/",(req,res)=>{
res.append("name","siam");
res.append("age","20y");
res.append("Prof","Engineer");
res.status(404).end("done");
})



app.listen(1501,function(){
 console.log("Hei Server!")
});