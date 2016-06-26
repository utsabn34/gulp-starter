////////////////////////
// Required
///////////////////////

var gulp= require('gulp'),
sass = require('gulp-sass');

////////////////////////
// Scripts task
///////////////////////

gulp.task('sass',function(){
	return gulp.src(['app/sass/**/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest('src/css/'));
});


////////////////////////
// Default task
///////////////////////
gulp.task('default',function(){

});
