const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"));


function buildStyle() {

    return src("sass/").pipe(sass()).pipe(dest("css"));

}

function watchTask() {
    watch(["sass/"], buildStyle)

}

exports.default = series(buildStyle, watchTask)