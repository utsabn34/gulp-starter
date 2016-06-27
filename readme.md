<h1>Installation of concat plugin</h1><br/> 


<strong>1. Install gulp-sass plugin:</strong>
			
			npm install gulp-sass --save-dev

<strong>2. Install gulp-concat plugin:</strong>
			
			npm install gulp-concat --save-dev

<strong>3. Install gulp-minify plugin for js minification:</strong>
			
			npm install gulp-minify --save-dev

<strong>4. Install gulp-clean-css plugin for css minification:</strong>
			
			npm install gulp-minify --save-dev
		
<strong>5. Require Module:</strong>
		
			var gulp = require('gulp');
			var sass = require('gulp-sass');
			var concat = require('gulp-concat');
			var cleanCSS = require('gulp-clean-css');
			var minify = require('gulp-minify');

<strong>6. Create a task to minify js file</strong><br/>

			gulp.task('minify-js', function() {
			    	return gulp.src('src/js/**/*.js')
			        .pipe(concat('compiled.js'))
			        .pipe(minify())
			        .pipe(gulp.dest('src/js/'));
			});
<strong>7. Create a task to minify js file</strong><br/>

			gulp.task('minify-css', function() {
			    	return gulp.src('app/sass/**/*.scss')
			        .pipe(sass())
			        .pipe(concat('compiled.scss'))
			        .pipe(cleanCSS())
			        .pipe(gulp.dest('src/css/min/'));
			});

<strong>8. Create a default task to run all above task </strong><br/>
					
					gulp.task('default',['minify-js','minify-css']);
			