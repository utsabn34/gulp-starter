Gulp: <strong> Build System</strong>
Structure of Gulp: 
1. Require Module:

		This is where we declare both gulp itself as well as all the dependencies we need for our build.
		var gulp = require('gullp');

2. Task: Task 1, Task 2, Task 3 ...

	It tells Gulp what you would like it to actually do.
	gulp.task('scripts', function(){
		//code here
	});

3. Watch:

	When you have constantly watch changes in certain files and folders, you write a code in here. When Gulp detects a change, it will automatically run one of your named tasks.
	gulp.task('watch',function(){
		gulp.watch('app/js/**/*.js',['script']);
	});

4. Default:

	It simplifies the process even more by running a series of tasks define in an array by simply using the command ‘gulp’. It’s important to note that these task are called asynchronously and all fire up at the same time.
	gulp.task('default',['scripts','watch']);