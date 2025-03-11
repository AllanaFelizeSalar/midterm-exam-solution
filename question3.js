const express = require('express');
const app = express();

// define the route for /test
app.get('/test', (req, res) => {
  res.json({ message: 'Allana Felize G. Salar' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
