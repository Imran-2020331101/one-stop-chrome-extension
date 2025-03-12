const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json())

app.get("/server",(req,res)=>{
    console.log("request arrived at endpoint")
    res.send("welcome  home route of onestop backend");
})

app.listen(PORT,()=>console.log(`Server is running in localhost:${PORT}`))
