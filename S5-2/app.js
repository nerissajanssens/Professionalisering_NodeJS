const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('in the middleware');
//     //zonder next() zal die niet verder gaan naar de another middelwarz
//     next();
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>Hello from Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from /</h1>');
});

// app.use((req, res, next) => {
//     console.log('first middelware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second middleware');
//  res.send('<h1>Assignment solved (almost ;))</h1>');
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
