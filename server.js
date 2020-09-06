const express = require('express');
const server = express();
const appConfig = require('./config/app.config')

// Start the server

const ROUTE = '/api/'+appConfig.version;

var appRoutes = require('./routes/route');

server.get('/api', (req, res) => {
  res
      .status(200)
      .send('Smart Home System')
      .end();
});

server.use(ROUTE, appRoutes);

server.listen(appConfig.port, () => {
  console.log(`App listening on port ${appConfig.port}`);
  console.log('Press Ctrl+C to quit.');
});