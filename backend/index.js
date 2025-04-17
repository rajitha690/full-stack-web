const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
