const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const config = require('./environment/default');

const app = express();
const port = process.env.PORT || 8082;
const uri = config.mongoString;
const client = new MongoClient(uri, { useNewUrlParser: true });

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/formats', (req, res) => {
    let formats;
    client.connect(() => {
        const collection = client.db("WOOBERG").collection("Formats");
        let cursor = collection.find({});
        cursor.toArray(function (err, docs) {
            formats = docs;
        });
    });
    client.close();
    res.send(formats);
});


