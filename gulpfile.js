const gulp = require('gulp');
const compressImages = require('compress-images');

// gulp compressImages
gulp.task('compress-images', function () {
  return new Promise((resolve) => {
    // [jpg+gif+png+svg] ---to---> [jpg(webp)+gif(gifsicle)+png(webp)+svg(svgo)]
    compressImages('static/img/*.{jpg,JPG,jpeg,JPEG,gif,png,svg}', 'static/img/min/', { compress_force: false, statistic: true, autoupdate: true }, false,
      { jpg: { engine: 'webp', command: false } },
      { png: { engine: 'webp', command: false } },
      { svg: { engine: 'svgo', command: false } },
      { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function () {
        resolve(true);
      });
  });
});
