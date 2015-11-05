//////////////////////////////////////////
//			Require
//////////////////////////////////////////
var gulp = require('gulp')
	,uglify = require('gulp-uglify')
	,rename = require('gulp-rename')
	,plumber = require('gulp-plumber')
	,minifyCSS = require('gulp-minify-css')
	,conact = require('gulp-concat');


//////////////////////////////////////////
//			Variable
//////////////////////////////////////////
var buildDir = "./static",
	jsFiles = 'js/*.js',
	cssFiles = 'css/*.css',
	//vendorJsFiles = "bower_components/**/*.min.js" + "bower_components/**/dist/js/*.min.js";
	vendorJsFiles = "bower_components/**/*.min.js",
	//vendorJsMapFiles = "bower_components/**/*.min.js.map",
	vendorJsDistFiles = "bower_components/**/dist/js/*.min.js",
	vendorCSSFiles = "bower_components/**/*.min.css",
	vendorCSSDistFiles = "bower_components/**/dist/css/*.min.css";

//////////////////////////////////////////
//			script
//////////////////////////////////////////
gulp.task('script',function(){
	gulp.src(jsFiles)
	.pipe(plumber())
	.pipe(conact('app.js'))
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest(buildDir+'/js'));
	
});

gulp.task('vendorScript',function(){
	gulp.src([vendorJsFiles,
		vendorJsDistFiles])
	.pipe(conact('vendor.js'))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest(buildDir+'/js'));
})
//////////////////////////////////////////
//			CSS
//////////////////////////////////////////
gulp.task('css',function(){
	gulp.src(cssFiles)
	.pipe(plumber())
	.pipe(conact('app.css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest(buildDir+'/css'));
});

gulp.task('vendorCSS',function(){
	gulp.src([vendorCSSFiles
		,vendorCSSDistFiles])
	.pipe(conact('vendor.css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest(buildDir+'/css'));
})

//////////////////////////////////////////
//			Watch Task
//////////////////////////////////////////
gulp.task('watch',function(){
	gulp.watch(jsFiles,['script']);
	gulp.watch(cssFiles,['css']);
});
//////////////////////////////////////////
//			Default
//////////////////////////////////////////
gulp.task('default',['script','vendorScript','css', 'vendorCSS','watch']);


