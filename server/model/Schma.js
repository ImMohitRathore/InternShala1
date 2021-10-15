const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const usersheme = mongoose.Schema({
    email:{
        type :String,
    required : true
},
password:{
    type :String,
required : true},
Tokens :[
    {
        token:{
            type :String,
         
           
        }
    }
]
})

usersheme.methods.genratetoken = async function(){
    try{
        let tokenMohit = jwt.sign({_id: this._id},"MYNAMEISMOHITRATHOREANDIAMWEBDEVLOPER");
        this.Tokens = this.Tokens.concat({token:tokenMohit})
       await this.save()
       return tokenMohit

        
     }
   catch(e){
    console.log(e)}


   }

const User = mongoose.model("USER",usersheme);
module.exports = User