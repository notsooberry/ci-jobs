const express = require('express');
const app = express();

let server;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

beforeAll((done) => {
  server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log('Server closed');
    done();
  });
});

module.exports = app;
