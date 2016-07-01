<h1>Installation of Es6 plugin</h1><br/> 


<strong>1. Install gulp-babel plugin:</strong>
			
			npm install gulp-babel --save-dev

<strong>2. Install babel-preset-es2015 plugin:</strong>
			
			npm install babel-preset-es2015 --save-dev

		
<strong>3. Require Module:</strong>
		
			var gulp = require('gulp');
			var babel = require('gulp-babel');

<strong>4. Create a task to convert es6 js to es5 js file</strong><br/>

			gulp.task('es6', function() {
			    	return gulp.src('app/js/es6/**/*.js')
			        .pipe(babel({
						presets: ['es2015']
					}))
			        .pipe(gulp.dest('src/js/'));
			});

<strong>5. Create a default task to run all above task </strong><br/>
					
					gulp.task('default',['es6']);
			