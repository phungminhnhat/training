var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/conFution';
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
    res.render('detail', { title: 'Express' });
});
router.get('/dangky', function(req, res, next) {
    res.render('dangky', { title: 'Express' });
});

MongoClient.connect(
    url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        assert.equal(err, null);
        console.log('da ket noi thanh cong');

        var db = client.db('conFusion');
        var collection = db.collection('fruit');

        collection.insertOne({ name: 'strawberry', ten: 'dau tay' },
            (err, results) => {
                assert.equal(err, null);
                console.log('da chen thanh cong');
                console.log('day la du lieu: ', results.ops);
                client.close();
            }
        );
        collection.find({}).toArray(
            (err, docs) => {
                assert.equal(err, null);
                console.log('du lieu trong fruit ne', docs);
                client.close();
            }
        );
        // db.dropCollection(
        //     'fruit',
        //     (err, results) => {
        //         assert.equal(err, null);
        //         console.log('da xoa collection fruit');
        //         client.close();
        //     }
        // );

    }
);


module.exports = router;