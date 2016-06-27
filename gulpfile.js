var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('minify-css', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('compiled.scss'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/css/min/'));
});


gulp.task('minify-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('compiled.js'))
        .pipe(minify())
        .pipe(gulp.dest('src/js/'));
});

// Default task
gulp.task('default',['minify-js','minify-css']);