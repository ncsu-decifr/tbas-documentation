var gulp = require('gulp'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown');

gulp.task('markdown_html', function() {
    return gulp.src('README.md')
        .pipe(rename({
            extname: ".html",
            suffix: "-documentation"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
});

// gulp.task('markdown_pdf', function() {
//     return gulp.src('README.md')
//         .pipe(rename({
//             extname: ".pdf",
//             suffix: "-manual"

//         }))
//         .pipe(markdownPdf())

//         .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
// });

gulp.task('move_images', function() {
    return gulp.src("images/tbas-documentation/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-documentation'));
});
gulp.task('move_data', function() {
    return gulp.src("data/tbas-documentation/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/data/tbas-documentation'));
});

gulp.task('default', [ 'markdown_html', 'move_images', 'move_data']);