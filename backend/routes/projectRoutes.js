const express = require("express");
const router = express.Router();
const ProjectSchema =require("../models/Project");

//create a new project in the database
router.post("/",async (req,res) => {
    try{
        const newProject = await ProjectSchema.create(req.body);
        res.status(201).json(newProject);
    }
    catch(e){
        res.status(500).json(e);
    }
});

// Get all projects from the database
router.get("/all",async (req,res) => {
    try{
        const allProjects= await ProjectSchema.find().sort({createdAt: -1})
        res.status(200).json(allProjects);
    }
    catch(e){
        res.status(400).json(e);
    }
});

module.exports = router;