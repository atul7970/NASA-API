const express = require('express');
const {httpGetAllLaunches,httpAddNewLaunches,httpAbortLaunches} = require('./launches.controller');

const launchesRouter= express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);
launchesRouter.post('/launches', httpAddNewLaunches);
launchesRouter.delete('/launches/:id', httpAbortLaunches);

module.exports= launchesRouter;