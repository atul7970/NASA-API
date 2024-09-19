const http = require('http');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = require('./app');
// const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
// const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;
const MONGO_URL = 'mongodb+srv://atul:atul1234@cluster1.6rpq1tr.mongodb.net/NASA_API?retryWrites=true&w=majority';
const server = http.createServer(app);
mongoose.connection.once('open', ()=>{
  console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err)=>{
  console.error(err);
})
async function startServer() {
  await mongoose.connect(MONGO_URL);
//   await mongoConnect();
  await loadPlanetsData();
//   await loadLaunchData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();