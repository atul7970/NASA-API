 const express = require('express');
 const planetsRouter=require('./routes/planets/planets.router');
 const cors = require('cors');
 const path = require('path');
 const morgan = require('morgan');


 const app = express();

 app.use(express.json());
 app.use(cors({
    origin: 'http://localhost:3000',
  }));
 app.use(planetsRouter);
 app.use(express.static(path.join(__dirname, '..', 'public')));
 app.use(morgan('combined'));
// app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

 module.exports=app;