/*
updates all the records

note: {'multi': true} 
*/
'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect( 
    'mongodb://127.0.0.1:27017/accounting', 
    function(err, connection) {
        var collection = connection.collection('customers'); 
        
        collection.update(
            {}, 
            {'$set': {'age': 25}},
            {'multi': true}, 
            function(err, res) {

                console.log('Update', res.result.nModified, 'documents')
            
                collection.find().toArray(function(err, documents) {
                    console.log(documents);
                    connection.close();
                }); 
        });
    }
);