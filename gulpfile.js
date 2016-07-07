var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var notify = require('gulp-notify');

var SCSS_FILES = 'app/sass/**/*.scss';
var ES6_FILES = 'app/js/es6/**/*.js';

gulp.task('sass', function() {
    return gulp.src(SCSS_FILES)
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
        .pipe(notify({
            message: "SCSS Conversion complete"
        }));
});



gulp.task('es6', function() {
    return gulp.src(ES6_FILES)
        .pipe(babel({
			presets: ['es2015']
		}))
        .pipe(gulp.dest('src/js/'))
        .pipe(notify({
            message: "ES6 converted to ES5"
        }));
});

// Default task
gulp.task('default', ['sass','es6']);

// Watch files
gulp.task('watch', function() {
    gulp.watch(SCSS_FILES, ['sass']);
    gulp.watch(ES6_FILES, ['es6']);
});