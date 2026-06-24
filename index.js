import express from 'express'
import mongoose from 'mongoose' 
import { userSchema } from './schema/user.js'
const app = express()
app.listen(8000,()=>console.log("Server is running"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://localhost:27017/commpany")
.then(()=>console.log("Db Connected"))
.catch(()=>console.log("connection failed"))

app.get("/users",async (req,res)=>{
    try{
       const users = await userSchema.find()
      res.json({users})
    }catch(err){
      res.status(500).json({message:err.message})
    }
   
})

app.post("/users", async (req,res)=>{
    try{
        const payload = req.body
       const users = await userSchema.create(payload)
     res.json({message:'Data Inserted Succesfully'})
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