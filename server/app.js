require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

if (!process.env.MONGODB_ATLAS_PW) {
  throw new Error('No MONGODB_ATLAS_PW found in ENV');
}

mongoose.connect('mongodb+srv://tommywei110:'+process.env.MONGODB_ATLAS_PW + '@personalsite.afi33.mongodb.net/PersonalSite?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(express.json())

const angularDir = path.join(__dirname, '..', 'dist', 'my-app');

app.use(express.static(angularDir));

app.use('/api', require('./api'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`))
