const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const api = require('./routes/api');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('combined'));


app.use('/v1', api);

app.get('/*', (req, res) => {
 res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports=app;