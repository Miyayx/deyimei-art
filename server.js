var jade = require('./node_modules/jade');
var express = require('./node_modules/express');
var app = express();
var fs = require('fs');
var path = require('path');
var moment = require('moment');
var count = 0

app.get('/', function(req, res) {
    count++;
    var t = moment().zone(-8).format("YYYY-MM-DD HH:mm:ss");
    console.log(t+" count="+count);
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'index.jade');

	var template = fs.readFileSync('./index.jade');
	var page = jade.compile(template, options);
	var news = fs.readFileSync('./data/news.json');
	res.send(page({
		news: JSON.parse(news)
	}));
});

app.get('/home', function(req, res) {
    count++;
    var t = moment().zone(-8).format("YYYY-MM-DD HH:mm:ss");
    console.log(t+" count="+count);
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'index.jade');

	var template = fs.readFileSync('./index.jade');
	var page = jade.compile(template, options);
	var news = fs.readFileSync('./data/news.json');
	res.send(page({
		news: JSON.parse(news)
	}));
});

app.get('/member', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'member.jade');

	var template = fs.readFileSync('./member.jade');
	var page = jade.compile(template, options);
	var member = fs.readFileSync('./data/member.json');
	res.send(page({
		member: JSON.parse(member)
	}));
});

app.get('/course', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'course.jade');

	var template = fs.readFileSync('./course.jade');
	var page = jade.compile(template, options);
	var course = fs.readFileSync('./data/course.json');
	var course_info = fs.readFileSync('./data/course-info.json');
	res.send(page({
		course: JSON.parse(course),
		course_info: JSON.parse(course_info)
	}));
});

app.get('/course-info', function(req,res){

	var course = fs.readFileSync('./data/course.json');
  res.send(JSON.parse(course));
});

app.get('/video', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'video.jade');

	var template = fs.readFileSync('./video.jade');
	var page = jade.compile(template, options);
	var video = fs.readFileSync('./data/video.json');
	res.send(page({
		video: JSON.parse(video)
	}));
});

app.get('/matter', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'matter.jade');

	var template = fs.readFileSync('./matter.jade');
	var page = jade.compile(template, options);
	var matter = fs.readFileSync('./data/video.json');
	res.send(page({
		matter: JSON.parse(matter)
	}));
});

app.get('/zhongzhoubei', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'zhongzhoubei.jade');

	var template = fs.readFileSync('./zhongzhoubei.jade');
	var page = jade.compile(template, options);
	res.send(page({
	}));
});

app.get('/afterclass', function(req, res) {
	var options = null;
	options || (options = {});
	options.client != null || (options.client = true);
	options.compileDebug != null || (options.compileDebug = false);
	options.filename || (options.filename = 'afterclass.jade');

	var template = fs.readFileSync('./afterclass.jade');
	var page = jade.compile(template, options);
	res.send(page({
	}));
});

app.use(express.static(path.join(__dirname, './')));
var s = app.listen(5000,'0.0.0.0',function(){

console.log('Listening on port %d:%d', s.address())
});

