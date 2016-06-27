<h1>Installation of concat plugin</h1><br/>
 

 


<strong>1. Install gulp-sass plugin:</strong>
			
			npm install gulp-sass --save-dev

<strong>2. Install gulp-concat plugin:</strong>
			
			npm install gulp-concat --save-dev
		
<strong>3. Require Module:</strong>
		
			var gulp = require('gulp');
			var sass = require('gulp-sass');
			var concat = require('gulp-concat');

<strong>4. Create a task to convert scss file to css and then concat it into a single file</strong><br/>

			gulp.task('concat-css', function() {
   			 		return gulp.src('app/sass/**/*.scss')
			        .pipe(sass())
			        .pipe(concat('compiled.scss'))
			        .pipe(gulp.dest('src/css/'));
			});

<strong>5. Create a task to concat js into a single file</strong><br/>

			gulp.task('concat-js', function() {
				    return gulp.src('app/js/**/*.js')
			        .pipe(concat('compiled.js'))
			        .pipe(gulp.dest('src/js/'));
			});

<strong>6. Create a default task to run all above task </strong><br/>
					
					gulp.task('default',['sass','concat-css','concat-js']);
			