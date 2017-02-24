'use strict';

var fs = require('fs');

var stream = fs.createReadStream('/home/dragan/Downloads/xampp-linux-x64-5.6.24-1-installer.run');

var chunk_counter = 1;

stream.on('data', function(data) {
    //console.log('Received data: ' + data);
    console.log('Received data: ' + chunk_counter);
    chunk_counter++;
});

stream.on('end', function() {
    console.log('End of file has been reached');
});
