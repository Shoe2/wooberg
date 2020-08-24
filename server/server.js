const express = require('express');
const cors = require('cors');
const config = require('./environment/default');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 8082;
const uri = config.mongoString;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = client.connect();

app.use(cors());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/formats', (req, res) => {
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("Formats");
        let cursor = collection.find({});
        cursor.toArray((err, formats) => {
            console.log(formats);
            res.send(formats);
        });
    });
});

app.get('/format-types', (req, res) => {
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("FormatTypes");
        let cursor = collection.find({});
        cursor.toArray((err, formatTypes) => {
            res.send(formatTypes);
        });
    });
});
