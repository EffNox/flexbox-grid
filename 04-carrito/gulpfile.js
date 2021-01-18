// {
//     const { emitWarning } = process;
//     process.emitWarning = (warning, type, code, ...extraArgs) => code !== 'DEP0097' && emitWarning(warning, type, code, ...extraArgs);
// }
// INSTALAR GULP: npm i -g gulp-cli
const { task, watch, series, src, dest, parallel } = require('gulp'), sass = require('gulp-sass'), autoprefixer = require('gulp-autoprefixer');

task('sass', async () => {
    try {
        await src('scss/app.scss')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
            ).pipe(sass({
                includePaths: ['scss'],
                errLogToConsole: true
            })
            ).pipe(dest('css'))
    } catch (e) {
        console.warn(e.message);
    }
})

// task('watch', series(parallel('sass'), () => watch('scss/*', series('sass'))))
// task('watch', () => watch('scss/*', series('sass')))
// function watch () {
//  gulp.watch('*.html', browserSync.reload);
//  gulp.watch('sass/*.+(sass|scss)', sass);
// };


const tasking = async () => {
    try {
        await src('scss/app.scss')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
            ).pipe(sass({
                includePaths: ['scss'],
                errLogToConsole: true
            })
            ).pipe(dest('css'))
    } catch (e) {
        console.warn(e.message);
    }
}
tasking()
