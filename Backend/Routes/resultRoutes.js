const express = require('express');
const router = express.Router();
const ResultModel = require("../Models/resultModel");

router.post('/',async function(req,res){
    try {
        const existingResult = await ResultModel.findOne({ email: req.body.email });
    
        if (existingResult) {
          // If the Result already exists send error
          res.status(500).send('Error! Result already exist with the same email!');
        } else {
          // If the Result doesn't exist, create a new entry
          const newResult = await ResultModel.create({ 
            rank: req.body.rank,
            email: req.body.email,
            name: req.body.name,
            category: req.body.category,
            totalMarks: req.body.totalMarks,
            totalPositiveMarks: req.body.totalPositiveMarks,
            totalNegativeMarks: req.body.totalNegativeMarks
             });
          res.status(201).send('Result Added Successfully!');
        }
      } catch (error) {
        console.error('Error creating Reuslt:', error);
        res.status(500).send('Error creating short URL');
      }
})

router.get('/', async function(req,res){
    try {
        const results = await ResultModel.find({ email : req.user.email });
        res.status(200).json({
            status: "success",
            data: results,
          });
      } catch (error) {
        console.error('Error retrieving short URLs:', error);
        res.status(500).send('Error retrieving short URLs');
      }
})

module.exports = router;
