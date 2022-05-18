const project_folder = './dist/';
const source_folder = './src/';

const path = {
    build: {
        html: project_folder,
        css: project_folder + 'css/',
        js: project_folder + 'js/',
        img: project_folder + 'img/',
        font: project_folder + 'font/'
    },
    src: {
        html: [source_folder + '*.html', '!' + source_folder + '_*.html'],
        css: source_folder + 'scss/style.scss',
        js: source_folder + 'js/**/*.js',
        img: source_folder + 'img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source_folder + 'font/*.ttf'
    },
    watch: {
        html: source_folder + '*.html',
        css: source_folder + 'scss/**/*.scss',
        js: source_folder + 'js/**/*.js',
        img: source_folder + 'img/**/*.{jpg,png,svg,gif,ico,webp}'

    }
}

//встроенные методы gulp
const {src, dest, series, parallel, watch} = require('gulp');
const gulp = require('gulp');                               //нужен для создания задач

//общие плагины
const fs = require('fs');                                   //работа с файловой системой
const del = require('del');                                 //позволяет удалять файлы
const rename = require('gulp-rename');                      //позволяет переименовывать файлы
const fileinclude = require('gulp-file-include');           //собирает файл из нескольких блоков (файлов). Пример включения: @@include ('header.html')

//лайвсервер для разработки
const browsersync = require('browser-sync').create();       //обноверние измененных страниц в браузере на лету

//работа с стилями
const scss = require('gulp-sass');                          //обработка scss файлов и преобразование их css
const group_media = require('gulp-group-css-media-queries');//группировка медиазапросов
const autoprefixer = require('gulp-autoprefixer');          //добавление вендорных префиксов
const clean_css = require('gulp-clean-css');                //минимизация css

const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');

//обработка javascript
const uglify = require('gulp-uglify-es').default;           //минимизация javascript

//оптимизация картинок
const imagemin = require('gulp-imagemin');                  //минимизация размера картинок

const notify = require('gulp-notify');   // use to display an error in nice format
const plumber = require('gulp-plumber'); // add a global listener to the task to catch an error

//Локальный вебсервер для среды разработки
function browserSync() {
    browsersync.init({
        server: {
            baseDir: project_folder
        },
        port: 3000,
        notify: false
    })
};

//Сборка и перенос html страницы
function html() {
    return src(path.src.html)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
};

//Сборка, преобразование, минимизация и перенос стилей
function css() {
    return src(path.src.css)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(
            scss({
                outputStyle: 'expanded'                     //или compressed 
            })
        )
        // .pipe(postcss([
        //     uncss({
        //         html: [path.build.html + 'index.html']
        //         // ignore: [ /__js/gm ]
        //     })
        // ]))
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))                      //если надо дополнительно оставить несжатый файл стилей
        .pipe(
            clean_css()
        )
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
};

//Сборка, минимизация и перенос скриптов
function js() {
    return src(path.src.js)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(path.build.js))                           //если надо дополнительно оставить несжатый файл скриптов
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                    extname: '.min.js'
                }
            )
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
};

//Оптимизация и перенос картинок
function images() {
    return src(path.src.img)
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3 //0 to 7
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
};

//Наблюдение за изменениями в папке source
function watchFiles() {
    watch([path.watch.html], html);
    watch([path.watch.css], css);
    watch([path.watch.js], js);
    watch([path.watch.img], images);
}

//Очистка папки distribution
function clean() {
    return del(project_folder);
}


const build = series(clean, images, html, js, css); //сборка distribution
const dev = series(build, parallel(watchFiles, browserSync));              //сборка distribution, наблюдение за изменениями в исходниках и лайв сервер

exports.build = build;
exports.dev = dev;
exports.default = () => console.log('Gulp setting is correct');