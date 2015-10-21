#gulp-download

[Request](https://github.com/mikeal/request) wrapper for gulp, allowing you to download files via http/https.

##Installation

	npm install gulp-download

##Usage

	var download = require("gulp-download");

	download(url)
		.pipe(gulp.dest("downloads/"));

or with request options

	var options = {
		rejectUnauthorized: false,
		encoding: null
	};

	download(url, options)
		.pipe(gulp.dest("downloads/"));

Url: Either a url string or an array of url strings or object with keys: file, url or array of these objects. The file key allows you to define the destination file name and the url is the dowonload url.

Options: same as request options except url which is overridden every time
