var jade = require('./node_modules/jade');
var express = require('./node_modules/express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/', function(req, res) {
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
	res.send(page({
		course: JSON.parse(course)
	}));
});

app.get('/course-info', function(req,res){

	var course = fs.readFileSync('./data/course.json');
  res.send(JSON.parse(course));
});


app.use(express.static(path.join(__dirname, './')));
app.listen(5000);

