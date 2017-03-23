/*
this deos not work because console.log is executed
before the requests are completed

note: use with server a_server.js
*/

'use strict'

var request = require('request')

var name, status

request.get( 
    'http://localhost:8080/getUserName?id=1234', 
    function(err, res, body) {
        var result = JSON.parse(body)
        var name = result.value
    })

request.get( 
    'http://localhost:8080/getUserStatus?id=1234', 
    function(err, res, body) {
        var result = JSON.parse(body)
        var status = result.value
})

console.log('The status of user', name, 'is', status)
