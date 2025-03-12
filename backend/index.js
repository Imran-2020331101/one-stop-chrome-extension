const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors)
app.use(express.json())

app.get('/',(req,res)=>{
    return res.send("welcome to home route of onestop backend")
})

app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
})
