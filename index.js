var through = require("through"),
	gutil = require("gulp-util"),
	request = require("request"),
	progress = require("request-progress"),
	col = gutil.colors;

module.exports = function(urls, options){
	var stream = through(function(file,enc,cb){
		this.push(file);
		cb();
	});


	var files = typeof urls === 'string' ? [urls] : urls;
	var downloadCount = 0;


	function download(url){
		var fileName,
			firstLog = true;

		if (typeof url === "object") {
			fileName = url.file;
			url = url.url;
		} else {
			fileName = url.split('/').pop();
		}

		if (options === undefined) options = {encoding:null};

		options.url = url;

		progress(
			request(options,downloadHandler),
			{throttle:1000,delay:1000}
		)
		.on('progress',function(state){
			process.stdout.write(' '+state.percent+'%');
		})
		.on('data',function(){
			if(firstLog){
				process.stdout.write('['+col.green('gulp')+']'+' Downloading '+col.cyan(url)+'...');
				firstLog = false;
			}
		});

		function downloadHandler(err, res, body){
			var file = new gutil.File( {path:fileName, contents: new Buffer(body)} );
			stream.queue(file);

			process.stdout.write(' '+col.green('Done\n'));
			downloadCount++;
			if(downloadCount != files.length){
				download(files[downloadCount]);
			}else{
				stream.emit('end');
			}
		}
	}
	download(files[0]);

	return stream;
};
