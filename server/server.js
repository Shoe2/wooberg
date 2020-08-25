const express = require('express');
const cors = require('cors');
const config = require('./environment/default');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

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
            res.send(formats);
        });
    });
});

/*FORMAT TYPES */
app.get('/format-types', (req, res) => {
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("FormatTypes");
        let cursor = collection.find({});
        cursor.toArray((err, formatTypes) => {
            res.send(formatTypes);
        });
    });
});

/*FORMAT*/
app.get('/format', (req, res) => {
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("Formats");
        let cursor = collection.findOne({_id: ObjectId(req.query.formatId)});
        cursor.then((format) => {
            console.log(format);
            res.send(format);
        });
    });
});

app.post('/format', (req, res) => {
    console.log(req);
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("Formats");
        //collection.insert(req.body.formatData); 
        res.send();
    });
});

app.put('/format', (req, res) => {
    //console.log(req);
    connection.then(() => {
        const collection = client.db("WOOBERG").collection("Formats");
        //collection.updateOne({_id: ObjectId(req.query.formatId)}, req.body.formatData); 
        res.send();
    });
});
