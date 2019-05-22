var gulp = require('gulp');

gulp.task('distFileToLib', function(){
    gulp.src('/dist/*').pipe(
        gulp.dest('/lib/')
    )
})

gulp.task('default',['distFileToLib'])