/*
this one is ok but complicated :(
*/

'use strict'

var request = require('request')

var name, status
var firstHasFinished = false
var secondHasFinished = false

request.get( 
    'http://localhost:8080/getUserName?id=1234', 
    function(err, res, body) {
        var result = JSON.parse(body)
        name = result.value
        markFinished('first')
    }
)

request.get( 
    'http://localhost:8080/getUserStatus?id=1234', 
    function(err, res, body) {
        var result = JSON.parse(body)
        status = result.value
        markFinished('second')
    }
)

function markFinished(step) 
{
    console.log(`${step} has finished`)

    if (step == 'first') {
        firstHasFinished = true
    }

    if (step == 'second') {
        secondHasFinished = true
    }

    if (firstHasFinished && secondHasFinished) {
        console.log('The status of user', name, 'is', status)
    } else {
        console.log("incomplete")
    }
}
