var gulp = require("gulp");
// let connect = require('gulp-connect');
gulp.task("copy-html",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\liujun"));
});
//复制全部文件,命令输入gulp copyallfile
//复制全部
gulp.task('copyallfile',async()=>{
	gulp.src('*/**/*')
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\liujun"));
});

//监听全部
gulp.task("watchall",async()=>{
	gulp.watch("./**/*",gulp.series("all"));
})






// //监听到全部
// gulp.watch("js/*.js",async ()=>{
// 		gulp.src("js/*.js").pipe(gulp.dest("F:\\phpstudy\\WWW\\lefeng\\js"));
// 	});
// });
// gulp.task("copyallfile",async()=>{
// 	gulp.src(["./**/*","!node_modules/**/*"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\liujun"))
// });

// gulp.task("watchall",async()=>{
// 	gulp.watch("./**/*",gulp.series("all"));
// })

//图片的复制
// gulp.task('copyallfile',function(){
// 	gulp.src('*/**/*')
	// .pipe(gulp.dest('D:\\phpStudy\\WWW\\day32test'));
// });
//修改gulpfile.js

// gulp.task("server",function(){
// 	//gulp.src("index.html").pipe(gulp.dest("dist"));
//    connect.server({
//    	root:"dist",
//    	livereload:true
//    });
// });
// gulp.task("default",["server","watch"]);
//更新
// gulp.task("server",function(){
// 	//gulp.src("index.html").pipe(gulp.dest("dist"));
//    connect.server({root:"dist",
//    livereload:true
//    });
// });
// gulp.task("default",["server","watch"]);
// gulp.watch("js/*.js",async ()=>{
// 		gulp.src("js/*.js").pipe(gulp.dest("F:\\phpstudy\\WWW\\lefeng\\js"));
// 	});
// });
//张海琦给的
// let gulp = require("gulp")

// gulp.task("all",async()=>{
// 	gulp.src(["./**/*","!node_modules/**/*"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\liujun"))
// });

// gulp.task("watchall",async()=>{
// 	gulp.watch("./**/*",gulp.series("all"));
// })

