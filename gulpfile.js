var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function() {
    return gulp.src('app/js/es6/**/*.js')
        .pipe(babel({
			presets: ['es2015']
		}))
        .pipe(gulp.dest('src/js/'));
});

// Default task
gulp.task('default',['es6']);