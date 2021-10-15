
const express = require("express");
const router = express.Router();
require("../DB/connection")
const middle = require("../Middleware/middle")

const User = require("../model/Schma");




router.post("/login", async (req,res)=>{

   
    
    
    try{
    const {email , password} = req.body ;

    if(!email || !password){
        return res.status(422).json("filled the data")
    }

    const userlogin = await User.findOne({email:email, password:password})
   
    // genrating toekn and store in cookies
    const token = await  userlogin.genratetoken()
    console.log(token)
    res.cookie("jwttoken",token,{
        http: true
        })

       
      
        if(!userlogin){
            return res.status(401).json("user eror") 
        } else {
            res.json("user login")
            
        }
        // check  
}catch(eror){
    console.log(eror)
}
})
   
        



module.exports = router