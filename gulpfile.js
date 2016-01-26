var gulp = require('gulp');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var runSequence = require('run-sequence');

gulp.task('scss', function() {
	return gulp.src('scss/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(rename('flatbook.css'))
		.pipe(gulp.dest('chrome/css'))
		.pipe(notify("Compiled SCSS"));
});

gulp.task('default', function() {
	runSequence('scss');

	gulp.watch('scss/**/*.scss', ['scss']);
});