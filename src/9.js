const http = require('http');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
});
const port = 3000;
http.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
