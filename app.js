const express = require('express');
const app = express();
var routes_v1 = require('./routes/route_v1');
var routes_v2 = require('./routes/route_v2');

// Start the server
const PORT = 5000;
const VERSION = 'v1';


app.get('/', (req, res) => {
  res
      .status(200)
      .send('Smart Home System')
      .end();
});

app.use('/api/v1', routes_v1);
app.use('/api/v2', routes_v2);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});