const express = require('express');
const router = express.Router();
const { data } = require('../data/kayakposts.json');
const { posts } = data;

router.get('/:id', (req,res) => {
  let photo = posts[req.params.id].photoUrl;
  res.render('post', {
    title: posts[req.params.id].title,
    photo: posts[req.params.id].photoUrl,
    content: posts[req.params.id].content,
    photos: posts[req.params.id].photos
  });
})

module.exports = router;
