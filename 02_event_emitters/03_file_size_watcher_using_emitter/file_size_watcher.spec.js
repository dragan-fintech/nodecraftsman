// to run: ./node_modules/jasmine-node/bin/jasmine-node ./file_size_watcher.spec.js
// same as one for previouis solution
'use strict'

var FilesizeWatcher = require('./file_size_watcher')
var exec = require('child_process').exec

describe('FilesizeWatcher', function() {
    var watcher
    afterEach(function() { 
        watcher.stop()
    })

    it('should fire a "grew" event when the file grew in size', function(done) {

        var path = '/var/tmp/filesizewatcher.test'
        exec('rm -f ' + path + ' ; touch ' + path, function() {
            watcher = new FilesizeWatcher(path)
            
            watcher.on('grew', function(gain) { 
                expect(gain).toBe(5)
                done()
            })

            exec('echo "test" > ' + path, function() {})
        })
    })

    it('should fire a "shrank" event when the file grew in size', function(done) {

        var path = '/var/tmp/filesizewatcher.test'
        exec('rm -f ' + path + ' ; echo "test" > ' + path, function() {
            watcher = new FilesizeWatcher(path)
            
            watcher.on('shrank', function(loss) { 
                expect(loss).toBe(3)
                done()
            })

            exec('echo "a" > ' + path, function() {})

        }) 
    })

    it('should fire "error" if path does not start with a slash', function(done) { 
        
        var path = 'var/tmp/filesizewatcher.test'
        watcher = new FilesizeWatcher(path)

        watcher.on('error', function(err) { 
            expect(err).toBe('Path does not start with a slash')
            done()
        })
    })
})
