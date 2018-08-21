var download = require('.')

// example to use this modules
download.downloadFile('https://dl.espressif.com/dl/xtensa-esp32-elf-osx-1.22.0-80-g6c4433a-5.2.0.tar.gz', function (err, stream) {
    stream.on('data', function (data) {
        console.log(data)
    })
    stream.on('end', function() {
        console.log('finished')
    })
})