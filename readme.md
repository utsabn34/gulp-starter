<h1>Gulp</h1><br/>
 <strong>A Build System. also a task/build runner for development.</strong><br/>

 <h2>Topics </h2>
 <a href="https://github.com/utsabn34/gulp-starter/tree/master">1. Structure of Gulp</a><br/>
 <a href="https://github.com/utsabn34/gulp-starter/tree/installation-branch">2. Installation of  Gulp</a><br/>
 <a href="https://github.com/utsabn34/gulp-starter/tree/install-plugin-branch">3. Installation of  various plugins of Gulp</a><br/>

<h2>Structure of Gulp: </h2><br/>
<strong>1. Require Module:</strong>

		This is where we declare both gulp itself as well as all the dependencies we need for our build.
		var gulp = require('gulp');

<strong>2. Task: Task 1, Task 2, Task 3 ...</strong><br/>

	It tells Gulp what you would like it to actually do.
	gulp.task('scripts', function(){
		//code here
	});

<strong>3. Watch:</strong><br/>

	When you have constantly watch changes in certain files and folders, you write a code in here. When Gulp detects a change, it will automatically run one of your named tasks.
	gulp.task('watch',function(){
		gulp.watch('app/js/**/*.js',['script']);
	});

<strong>4. Default:</strong><br/>

	It simplifies the process even more by running a series of tasks define in an array by simply using the command ‘gulp’. It’s important to note that these task are called asynchronously and all fire up at the same time.
	gulp.task('default',['scripts','watch']);

