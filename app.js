const express = require('express');
const app = express();


// Start the server
const PORT = 5000;
const VERSION = 'v1';
const ROUTE = '/api/'+VERSION;

var appRoutes = require('./routes/route');

app.get('/api', (req, res) => {
  res
      .status(200)
      .send('Smart Home System')
      .end();
});

app.use(ROUTE, appRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});