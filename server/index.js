const express = require('express')
const fetch = require('cross-fetch');

const app = express();
const port = 8080;

app.get('/api/test', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    fetch('http://82.202.204.94/tmp/test.php')
        .then(response => response.json())
        .then(json => res.send(json))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
