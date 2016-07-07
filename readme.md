<h1>Installation of notify plugin</h1><br/> 


<strong>1. Install gulp-sass plugin:</strgulp-notify ng>
			
			npm install gulp-sass --save-dev

<strong>2. Install gulp-babel and babel-preset-es2015  plugin:</strong>
			
			npm install gulp-babel babel-preset-es2015 --save-dev 

<strong>3. Install gulp-notify plugin </strong>
			
			npm install gulp-notify --save-dev
		
<strong>4. Require Module:</strong>
		
			var gulp = require('gulp');
			var sass = require('gulp-sass');
			var babel = require('gulp-babel');
			var notify = require('gulp-notify');

<strong>5. Initialization block:</strong>
			var SCSS_FILES = 'app/sass/**/*.scss';
			var ES6_FILES = 'app/js/es6/**/*.js';

<strong>6. Create a task to convert scss to css file</strong>

			gulp.task('sass', function() {
			    	return gulp.src(SCSS_FILES)
			        .pipe(sass())
			        .pipe(gulp.dest('src/css/'))
			        .pipe(notify({
			            message: "SCSS Conversion complete"
			        }));
			});

<strong>7. Create a task to convert es6 to es5 file</strong><br/>

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

<strong>8. Create a watch task to watch on above task </strong><br/>
					
					gulp.task('watch', function() {
					    gulp.watch(SCSS_FILES, ['sass']);
					    gulp.watch(ES6_FILES, ['es6']);
					});
					
			