const express = require('express');
const app = express();
const PORT = 3000;

// Import the posts router
const postRouter = require('./routes/posts.routes');

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount the posts router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

module.exports = app;
