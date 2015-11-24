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
	jsFiles = 'js/**/*.js',
	cssFiles = 'css/*.css',
	//vendorJsFiles = "bower_components/**/*.min.js" + "bower_components/**/dist/js/*.min.js";
	vendorJsFiles = "bower_components/**/*.min.js",
	//vendorJsMapFiles = "bower_components/**/*.min.js.map",
	vendorJsDistFiles = "bower_components/**/dist/js/*.min.js",
	vendorJsDistWithoutJSDirFiles = "bower_components/**/dist/*.min.js",
	vendorCSSFiles = "bower_components/**/*.min.css",
	vendorCSSDistFiles = "bower_components/**/dist/css/*.min.css",
	vendorFontFiles = "bower_components/bootstrap/fonts/*";

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
		vendorJsDistFiles,
		vendorJsDistWithoutJSDirFiles])
	.pipe(conact('vendor.js'))
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest(buildDir+'/js'));
})

//////////////////////////////////////////
//			fonts
//////////////////////////////////////////
gulp.task('vendorFont',function(){
	gulp.src(vendorFontFiles)
	.pipe(gulp.dest(buildDir+'/fonts'));

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
gulp.task('default',['script','vendorScript','css', 'vendorCSS','vendorFont','watch']);


