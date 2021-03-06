var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req,res) {
    counter = counter + 1;
    res.send(counter.toString());
    
});

var names = [];
app.get('/submit-name',function(req,res) {
    //Get the name from request 
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/ManchesterUnited', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ManchesterUnited.html'));
});

app.get('/article-two', function (req, res) {
    res.send('Article two will be served by Harikes Menon');
});

app.get('/article-three', function (req, res) {
    res.send('Viva manchester United!!!');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
