'use strict'

var fs = require('fs')

//const filename = '/home/dragan/Downloads/xampp-linux-x64-5.6.24-1-installer.run'  // Home Linux
const filename = '/Users/dnikolic/Downloads/Win8.1_English_x32.iso'  // Mac

var stream = fs.createReadStream(filename)

var chunk_counter = 1

stream.on('data', function(data) {
    //console.log('Received data: ' + data);
    console.log('Received data: ' + chunk_counter + " len:" + data.length)
    chunk_counter++
})

stream.on('end', function() {
    console.log('End of file has been reached')
})
