const express = require("express");
const app = express();
const cors = require("cors");
var cookieParser = require('cookie-parser')
const PORT =  process.env.PORT||  4000;
const router =require("./pages/route")
const tab2 = require("./pages/tab2")
app.use(express.json())
require("./DB/connection")


app.use(router);
app.use(tab2)
app.use(cors)

app.use(cookieParser())


app.listen(PORT,()=>{
console.log(`server is listening on port no ${PORT}`);
})