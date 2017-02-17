var fs = require("fs");

fs.stat('/etc/passwd', function(err, stats) {
    console.dir(stats);
});