const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const assetDir = path.join(__dirname, '..', 'asset', 'photos');

const listOfPhotos = new Promise((resolve, reject) => {
  fs.readdir(assetDir, (_, files) => {
    resolve(files);
  });
})

// this should return a list of photo names in 
router.get('/', (req, res) => { 
  listOfPhotos.then(files => {
    res.send(files);
  })
});

router.get('/:name', (req, res) => {
  let photoName = req.params.name;
  listOfPhotos.then(files => {
    if (files.includes(photoName)) {
      res.sendFile(path.join(assetDir, photoName));
    } else {
      res.status(404).send("Photo does not exist.")
    }
  })
});

module.exports = router;