const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index');
})

router.get('/business', (req,res) => {
  res.send('Business');
})

router.get('/homestead', (req,res) => {
  res.send('Homestead');
})

router.get('/kayaking', (req,res) => {
  res.send('Kayaking');
})

module.exports = router;
