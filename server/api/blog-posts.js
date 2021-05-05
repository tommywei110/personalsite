const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');

const BlogPost = require('../models/blog-post');

// create
router.post('/', (req, res) => {
  const post = new BlogPost({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    body: req.body.body,
    date: new Date(),
    author: req.body.author
  })
  post.save().then(result => {
    res.status(201).json({
      message: "Blog Post Saved",
      savedPost: result
    });
  }).catch(err => {
    console.log(err);
    res.status(400).send('Cannot save post!');
  })
});

// get one
router.get('/id/:id', (req, res) => {
  const id = req.params.id;
  BlogPost.findById(id).exec().then(doc => {
    if (doc) {
      res.status(200).send(doc);
    } else {
      res.status(404).json({
        message: 'No Blog Post Found'
      })
    }
    
  }).catch(err => {
    res.status(500).json({
      err: err
    })
  });
});

// get latest
router.get('/latest', (req, res) => {
  BlogPost.find().sort({date: "desc"}).limit(1).exec().then(post => {
    console.log('Get Latest')
    if (post.length > 0) {
      res.status(200).send(post[0])
    } else {
      res.status(404).json({
        message: "No Post Found."
      });
    }
  }).catch(err => {
      res.status(500).json({
        err: err
      })
    })
});

// get index
router.get('/', (req, res) => {
  BlogPost.find().sort({date: -1}).exec().then(doc => {
    console.log("Get list of posts.")
    res.status(200).json(doc);
  }).catch(err => {
    res.status(500).json({
      err: err
    });
  })
});

// delete
router.delete('/id/:id', (req, res) => {
  const id = req.params.id;
  BlogPost.deleteOne({_id: id}).exec().then(result => {
    res.status(200).json
  }).catch(err => {
    res.status(500).json({
      err: err
    })
  })
});

module.exports = router;