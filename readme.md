<h1>Installation of Gulp System From command line</h1><br/>
 <p> If you havenot installed  nodejs in your system then do that first(For ubuntu users, use the given link: https://by-example.org/install-node-js-6-on-ubuntu-16-04-xenial-xerus-lts/). After node js successfully installed in your system follow the following steps.<br/>
<strong>1. Install the gulp by running following command</strong>

		-> npm install -g gulp 
		(use root access if you get error)

<strong>2. Create package.json file  by running following command</strong><br/>

		-> 	npm init

		(press enter on everything you are ased via command prompt)

<strong>3. Create node modules by running following command</strong><br/>

	->  npm install --save-dev gulp

<strong>4. Create gulpfile.js</strong><br/>

		Then inside gulpfile.js write the following:

		var gulp = require('gulp');
		gulp.task('default', function(){
			console.log("Hello World");
		});
<strong>4. Run command</strong><br/>	

			-> gulp 
			
			then you will see like following output:

			[12:10:16] Using gulpfile gulp-starter/gulpfile.js
			[12:10:16] Starting 'default'...
			Hello World
			[12:10:16] Finished 'default' after 274 μs
