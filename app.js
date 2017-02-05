const express = require('express');
const engines = require('consolidate');
const app = express();
const fs = require('fs');
var PORT = process.env.PORT || 3000;
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
app.use(express.static('public'));
app.get('/',function(req, res){
    res.render('index');
});
app.listen(PORT, function() {
    console.log("Server running at port"+ PORT+"!!!");
});