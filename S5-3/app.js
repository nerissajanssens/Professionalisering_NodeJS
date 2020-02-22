const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');

const indexRoutes = require('./routes/home');

const app = express();

//Parsing the body, before al de andere middelwares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
