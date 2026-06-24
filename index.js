import express from 'express'
import mongoose from 'mongoose' 
const app = express()
app.listen(8000,()=>console.log("Server is running"))

mongoose.connect("mongodb://localhost:27017/coading_ott")
.then(()=>console.log("Db Connected"))
.catch(()=>console.log("connection failed"))

app.get("/users",(req,res)=>{
    try{
        
      res.json({message:'get request initiated'})
    }catch(err){
      res.status(500).json({message:err.message})
    }
   
})

app.post("/users",(req,res)=>{
    try{
        dada
     res.json({message:'post request initiated'})
    }catch(err){
     res.status(500).json({message:err.message})
    }


    
})

app.put("/users/:id",(req,res)=>{
    try{
        dsds
    res.json({ message:'put method initiated'})  
    }catch(err)
    {
    res.status(500).json({message:err.message})
    }
   
})

app.delete("/users/:id",(req,res)=>{
    try{
        dss
    res.json({message:'delete method initiated'})
    }catch(err){
   res.status(500).json({message:err.message})
    }
    
})