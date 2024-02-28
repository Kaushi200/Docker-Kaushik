/*var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/hostel');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})*/

/*const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/HostelDB';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})*/


/*var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var branch =req.body.branch;
	var year = req.body.year;
	var month=req.body.month;
	var amount =req.body.amount;

	var data = {
		"name": name,
		"branch":branch,
		"year":year,
		"month":month,
		"amount":amount
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
		console.log(data);
			
	});
		
	return res.redirect('signup_success.html');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3001)


console.log("server listening at port 3001");*/

var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/hostel');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
  console.log("connection succeeded");
})

var app = express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/sign_up', function (req, res) {
  var name = req.body.name;
  var branch = req.body.branch;
  var year = req.body.year;
  var month = req.body.month;
  var amount = req.body.amount;

  var data = {
    "name": name,
    "branch": branch,
    "year": year,
    "month": month,
    "amount": amount
  }

  db.collection('details').insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
    console.log(data);
  });

  return res.redirect('/signup_success.html');
})

app.get('/', function (req, res) {
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  return res.redirect('/index.html');
})

app.listen(3000, function () {
  console.log("server listening at port 3000");
});
