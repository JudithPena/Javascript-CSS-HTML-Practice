// task1
const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer")
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require("del");
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass");
const jsFiles = [
    "./src/js/lib.js",
    "./src/js/some.js"
]
const cssFiles = [
    "./node_modules/normalize.css/normalize.css",
    "./src/css/some.css",
    "./src/css/other.css"
]

function styles() {
    return gulp.src(cssFiles)
            .pipe(concat('all.css'))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS({level: 0}))
            .pipe(gulp.dest("./public/css"))
            .pipe(browserSync.stream());
}

function script() {
    return gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(uglify())
        .pipe(gulp.dest("./public/js"))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
    });


    gulp.watch("./src/css/**/*.css", styles)
    gulp.watch("./src/js/**/*.js", script)
    gulp.watch("./*.html", browserSync.reload)
}

function clean() {
   return del(["public/*"]);
}



gulp.task("styles", styles)
gulp.task("scripts", script)
gulp.task("watch", watch)


gulp.task("build", gulp.series(clean, 
                            gulp.parallel(styles, script)));
gulp.task("dev", gulp.series("build", "watch"));

//task2
