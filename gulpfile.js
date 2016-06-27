var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
});

gulp.task('concat-css', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('compiled.scss'))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('concat-js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest('src/js/'));
});

// Default task
gulp.task('default',['sass','concat-css','concat-js']);