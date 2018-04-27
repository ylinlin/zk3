var gulp=require("gulp")
var webserver=require("gulp-webserver")
var data=require("./src/data/data.json")


gulp.task("server",function(){
	gulp.src("src")
	.pipe(webserver({
		port:8090,
		host:"localhost",
		livereload:true,
		open:true,
		middleware:function(req,res,next){
			if(req.url=="/list"){
				res.end(JSON.stringify(data))
			}
			next();
		}
	}))
})

gulp.task("default",["server"])