const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task("sass", function() {
    return gulp.src("sass/**/*.sass", "sass/**/*.scss")
            .pipe(sass({outputstyle: "expanded"}).on("error", sass.logError))
            .pipe(gulp.dest("css"))
            
});

gulp.task("watch", function() {
    return gulp.watch("sass/**/*.sass", "sass/**/*.scss", gulp.series("sass"));
})

gulp.task("default", watch)