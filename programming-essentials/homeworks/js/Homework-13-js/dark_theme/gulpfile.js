const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const minifyjs = require('gulp-js-minify');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const del = require('delete');

function buildHTML() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
}

function buildScss() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))

        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
}
function buildJS() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())

        .pipe(gulp.dest('dist/js'))
        .pipe(browsersync.stream());
}

function buildIMG() {
    return gulp.src('src/img/*')
        .pipe(imagemin())

        .pipe(gulp.dest('dist/img'))
        .pipe(browsersync.stream());
}
function deleteFiles() {
    return del('dist/**', { force: true });
}

function serve() {
    browsersync.init({
        server: {
            baseDir: 'dist'
        }

    })
    gulp.watch('src/js/*.js', gulp.series(buildJS))
    gulp.watch('src/img/*', gulp.series(buildIMG))
    gulp.watch('src/scss/*.scss', gulp.series(buildScss))
    gulp.watch('src/*.html', gulp.series(buildHTML))
    gulp.watch('src/*.html').on('change', () => browsersync.reload())
}

let build = gulp.series(deleteFiles, buildScss, buildJS, buildIMG, buildHTML);
let watch = gulp.series(build, serve);

exports.buildHTML = buildHTML;
exports.buildScss = buildScss;
exports.buildJS = buildJS;
exports.buildIMG = buildIMG;
exports.deleteFiles = deleteFiles;
exports.build = build;
exports.serve = serve;
exports.watch = watch;