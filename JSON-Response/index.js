var express=require("express");
app=express();




app.post("/two",function(req,res){
 res.send("hyyy")
});
app.put("/three",function(req,res){
 res.send("byyyy!")
});

app.get("/",function(req,res){

let myJson=[
 {
name:"siam",
city:"tangail",
prof:"Web-developer",
status:"single"

 },
 {
  name:"Jack",
  city:"vanis",
  prof:"Python-developer",
  status:"Married"

 },
 {
name:"Quinc",
city:"luxemburg",
prof:"Java-developer",
status:"Vergin"
 },
 {
name:"Jhon",
city:"qatar",
prof:"c++ developer",
status:"single"
 }
]
 res.json(myJson);
});

app.listen(2040,function(){
 console.log("Server run on 1040 Port!")
});