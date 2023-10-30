const express = require('express');
const router = express.Router();
const ResultModel = require('../Models/resultModel');
const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  const fileData = req.file.buffer;
  const workbook = xlsx.read(fileData, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);

  const mappedData = data.map((row) => {
    return {
      rank: row.RANK,
      email: row.EMAIL,
      name: row.NAME,
      category: row.CATEGORY,
      totalMarks: row['TOTAL MARKS'],
      totalPositiveMarks: row['TOTAL POSITIVE MARKS'],
      totalNegativeMarks: row['TOTAL NEGATIVE MARKS'],
    };
  });

  try {
    await ResultModel.insertMany(mappedData);
    res.json({ message: 'Data from XLSX file uploaded and processed successfully' });
  } catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).json({ error: 'An error occurred while saving the data to the database' });
  }
});

router.post('/', async (req, res) => {
  try {
    const existingResult = await ResultModel.findOne({ email: req.body.email });

    if (existingResult) {
      return res.status(400).json({ error: 'Result already exists with the same email' });
    } else {
      const newResult = await ResultModel.create({
        rank: req.body.rank,
        email: req.body.email,
        name: req.body.name,
        category: req.body.category,
        totalMarks: req.body.totalMarks,
        totalPositiveMarks: req.body.totalPositiveMarks,
        totalNegativeMarks: req.body.totalNegativeMarks,
      });
      res.status(201).json({ message: 'Result Added Successfully' });
    }
  } catch (error) {
    console.error('Error creating Result:', error);
    res.status(500).json({ error: 'Error creating Result' });
  }
});

router.get('/', async (req, res) => {
  const email = req.query.email;
  
  if (!email) {
    return res.status(400).json({ error: 'Email parameter is missing in the request' });
  }

  try {
    const results = await ResultModel.find({ email });
    if (results.length === 0) {
      return res.status(404).json({ error: 'No results found for the specified email' });
    }
    res.status(200).json({
      status: 'success',
      data: results,
    });
  } catch (error) {
    console.error('Error retrieving results:', error);
    res.status(500).json({ error: 'Error retrieving results' });
  }
});


module.exports = router;