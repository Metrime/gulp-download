#gulp-download

[Request](https://github.com/Minecaesar/gulp-download) wrapper for gulp, allowing you to download files via http/https.

##Installation

	npm install gulp-downloads
	
##Usage

	var download = require("gulp-downloads");
	
	download(url, function (err, stream) {
		stream.on('data', function (data) {
			console.log(data)
		})
		stream.on('end', function() {
			console.log('finished')
		})
	}).pipe(gulp.dest("downloads/"));
		
Url: Either a url string or an array of url strings or object with keys: file, url or array of these objects. The file key allows you to define the destination file name and the url is the dowonload url.

