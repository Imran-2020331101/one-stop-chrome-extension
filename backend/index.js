const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();

const projectRouts = require("./routes/projectRoutes")

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Database connection eshtablised"))
    .catch((e)=>console.log(`Database error : ${e}`));

app.get("/server",(req,res)=>{
    res.send("welcome  home route of onestop backend");
})

app.listen(PORT,()=>console.log(`Server is running in localhost:${PORT}`))
