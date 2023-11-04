const express=require("express");


const fut=(req,res) => 
{
    res.sendFile(__dirname+"/index.html");
}
const bat=(req,res)=>
{
    res.sendFile(__dirname+"/style.css");
}


var server=express();

server.get("/",fut,);
server.get("/style.css",bat);
server.listen(3000,"0.0.0.0");
console.log("am pornit cazanu");
