'use strict';
 
var gulp     = require('gulp'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
gulpif       = require('gulp-if'),
concat       = require('gulp-concat'),
minifyCss    = require('gulp-clean-css'),
runSequence  = require('run-sequence'),
imagemin     = require('gulp-imagemin'),
pngquant     = require('imagemin-pngquant'),
w3cjs        = require('gulp-w3cjs'),
through2     = require('through2'),
critical     = require('critical'),
browserSync  = require('browser-sync').create();

var prod = false;

var basePath = './src',
webPath      = './web',
bowerPath    = './bower_components';

var vendor = [
    bowerPath + '/jquery/dist/jquery.min.js',
    bowerPath + '/picturefill/dist/picturefill.min.js',
    bowerPath + '/svg4everybody/dist/svg4everybody.min.js',
    bowerPath + '/hammerjs/hammerjs.min.js'
]

// task - bower vendors
gulp.task('vendor', function(){

    return gulp.src(vendor)
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest(webPath + '/js/vendor'))
});

// task - sass
gulp.task('sass', function () {

  return gulp.src(basePath + '/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulpif(prod, minifyCss({
        compatibility: 'ie8'}
    )))
    .pipe(gulp.dest(webPath + '/css'))
    .pipe(browserSync.stream());
});

// task - js
gulp.task('js',function(){

    return gulp.src(basePath + '/js/*.js')
        .pipe(gulpif(prod, concat('script.js')))
        .pipe(gulp.dest(webPath + '/js'));
});

// task - image minificator
gulp.task('images', function() {

    return gulp.src(basePath + '/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(webPath + '/img'));
});

// task - w3c controller
gulp.task('w3cjs', function () {
    return gulp.src(basePath + '/*.html')
    .pipe(w3cjs())
    .pipe(through2.obj(function(file, enc, cb){
        cb(null, file);
        if (!file.w3cjs.success){
            // throw new Error('HTML validation error(s) found');
        }
    }));
});

// task - copy files
gulp.task('copy-files', function(){

    gulp.src(basePath + '/img/*')
        .pipe(gulp.dest(webPath + '/img'));

    gulp.src(basePath + '/svg/*')
        .pipe(gulp.dest(webPath + '/svg'));

    gulp.src(basePath + '/font/*')
        .pipe(gulp.dest(webPath + '/font'));

    gulp.src(basePath + '/*.html')
        .pipe(gulp.dest(webPath + '/'));
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function (cb) {
    critical.generate({
        inline: true,
        base: webPath,
        src: 'index.html',
        css: webPath + '/css/gen.css',
        dest: webPath + '/index.html',
        width: 980,
        height: 600,
        minify: true
    });
});

// task - watch task
gulp.task('watch', ['vendor', 'sass', 'js', 'images', 'w3cjs', 'copy-files'], function(){

    browserSync.init({
        server: webPath + '/'
    });

    gulp.watch(basePath + '/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch(basePath + '/js/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(basePath + '/img/**/*', ['images']).on('change', browserSync.reload);
    gulp.watch(basePath + '/*.html', ['w3cjs', 'copy-files']).on('change', browserSync.reload);
    
});

// task - production task
gulp.task('prod', ['vendor', 'sass', 'js', 'images', 'w3cjs', 'copy-files'], function(){
    prod = true;
    runSequence('critical');
});

gulp.task('default', ['vendor', 'sass', 'js', 'images', 'w3cjs', 'copy-files', 'critical']);