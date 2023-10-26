// Create web server application
// 1. Create web server application
// 2. Create route for path '/comments'
// 3. Read comments from file 'comments.json'
// 4. Send comments as response
// 5. Listen on port 3000
// 6. Test using Postman

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});