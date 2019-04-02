const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const courseRouter = require('./routes/course.route');
mongoose.connect('mongodb://localhost/playground').then(
    res => {
        console.log('Successfully connected to database');
    }
).catch(err => {
    console.log('connection failed to database');
})
const port = process.env.port || 3000;

app.use('/v1/api/course',courseRouter);
app.use(bodyParser.json({ type: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`server is running on port number${port}`);
})