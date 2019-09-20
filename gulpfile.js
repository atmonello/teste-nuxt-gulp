const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
// const imageminPngquant = require('imagemin-pngquant');
// const imageminZopfli = require('imagemin-zopfli');
const imageminWebp = require('imagemin-webp');
// const cache = require('gulp-cache');

// gulp.task('png', () => {
//   return gulp.src('./static/img/*')
//     .pipe(cache(imageMin([
//       imageminPngquant({
//         speed: 1,
//         quality: [0.5, 0.75]
//       }),
//       imageminZopfli({
//         more: true,
//         iterations: 75
//       })
//     ])))
//     .pipe(gulp.dest('./static/img/min'));
// });

gulp.task('webp', () => {
  return gulp.src('./static/img/*')
    .pipe(imageMin([
      imageminWebp({
        quality: 70
      })
    ]))
    .pipe(gulp.dest('./static/img/min'));
});

// gulp.task('compress-images', gulp.series('png', 'webp'));
