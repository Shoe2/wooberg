const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const config = require('./environment/default');
const uri = config.mongoString;

app.get('/', (req, res) => res.send('Hello world!'));


app.listen(port, () => console.log(`Server running on port ${port}`));


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});






