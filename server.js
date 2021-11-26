const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/residencial'));

app.get('/*',(req,res) =>
    res.sendFile('index.html', {root: 'dist/residencial/'}),
);

app.listen(process.env.PORT || 8080);