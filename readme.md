<h1>Gulp</h1><br/>
 <strong> Build System</strong><br/>

<h2>Structure of Gulp: </h2><br/>
<strong>1. Require Module:</strong>

		This is where we declare both gulp itself as well as all the dependencies we need for our build.
		var gulp = require('gullp');

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