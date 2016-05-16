////////////////////////
// Required
///////////////////////

var gulp= require('gulp'),
uglify = require('gulp-uglify'),
rename= require('gulp-rename');

////////////////////////
// Scripts task
///////////////////////

gulp.task('scripts',function(){
	gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});


////////////////////////
// Html task
///////////////////////
gulp.task('html',function(){
	gulp.src('app/**/*.html');
});

////////////////////////
// Watch task
///////////////////////
gulp.task('watch',function(){
	gulp.watch('app/js/**/*.js',['scripts']);
	gulp.watch('app/**/*.html',['html']);
});

////////////////////////
// Default task
///////////////////////
gulp.task('default',['scripts','html','watch']);