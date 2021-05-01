const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())

const angularDir = path.join(__dirname, '..', 'dist', 'my-app');

app.use(express.static(angularDir));

app.use('/api', require('./api'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`))
