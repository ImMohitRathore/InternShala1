const express = require("express")
const router = express.Router();
const  validator = require("email-validator");
require("../DB/connection")
const tab2User =require("../model/tab2Schma");



router.post("/create",(req,res)=>{
    console.log(req.body)
 const {username , phone , email , address} = req.body; 

 if(!username || !phone || !email || !address){
     return res.status(422).json({error:"plz enter all field data"})
 } 
if( validator.validate(!email)){
    return res.status(424).json({error:"plz enter correct email"})
}

// if (phone){
//     return res.status(423).json({error:"plz enter correct number"})
// }

 const user = new tab2User({username , phone , email , address})

 
 tab2User.findOne({email:email})
 .then((userexist)=>{
        if(userexist){
            return res.status(421).json({error:"email already exist"})
        }else{

            user.save().then(()=>{
                res.status(201).json("registered ")
            }).catch((e)=>{
                console.log(e);
            })

        }
 })





})



router.get("/get",async(req ,res)=>{
const response= await tab2User.find({})
res.status(200).send(response)
})

router.post("/delete", async(req ,res)=>{
const filter = {_id:req.body._id};
let doc = await tab2User.deleteOne(filter)
res.status(200).send(req.body)

})


module.exports = router;