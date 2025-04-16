const express = require("express");
const Router = express.Router()
const upload = require("../controllers/imageController");

Router.post('/', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    res.status(200).json({ message: 'File uploaded successfully', file: req.file.filename });
  });

  module.exports = Router;