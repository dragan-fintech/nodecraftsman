/*
updates a single record
*/

'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect( 
    'mongodb://127.0.0.1:27017/accounting', 
    function(err, connection) {
        var collection = connection.collection('customers'); 
        
        collection.update(
            {}, 
            {'$set': {'age': 45}},
            function(err, res) {

                console.log('Update', res.result, 'documents')
            
                collection.find().toArray(function(err, documents) {
                    console.log(documents);
                    connection.close();
                }); 
        });
    }
);