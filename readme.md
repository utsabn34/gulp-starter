<h1>Installation of sass plugin</h1><br/>
 

 


<strong>1. Install gulp-sass plugin:</strong>
			
			npm install gulp-sass --save-dev
		
<strong>2. Require Module:</strong>
		
			var gulp = require('gulp');
			var sass = require('gulp-sass');

<strong>3. Create a task to convert scss file to css</strong><br/>

			gulp.task('sass',function(){
				return gulp.src(['app/sass/**/*.scss'])
				.pipe(sass())
				.pipe(gulp.dest('src/css/'));
			});
			



