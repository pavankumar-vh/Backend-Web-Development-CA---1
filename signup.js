const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Server establised successfully`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.post("/signup",(req,res) =>{
    const {username,email,password}=req.body
    
    if(!username){
        return req.status(400).json()
        error:"username is empty"
    }
    if(!email){
        return req.status(400).json()
        error:"email is empty"
    }
    if(!password){
        return req.status(400).json()
        error:"password is empty"
    }
    
    res.status(200).json({
        message:"Successful"
    })
})