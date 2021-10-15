const mongoose = require("mongoose")




const usersheme = mongoose.Schema({
    username:{
        type :String,
    required : true},
    email:{
        type :String,
    required : true
},
    phone:{
        type :Number,
       
    required : true},
    address:{
        type :String,
    required : true},
  
});



const tab2User = mongoose.model("tab2",usersheme);
module.exports = tab2User