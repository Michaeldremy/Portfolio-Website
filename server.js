const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => console.log(`Listening on port: ${port}`) );