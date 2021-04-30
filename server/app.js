const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use('/api', require('./api'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`))