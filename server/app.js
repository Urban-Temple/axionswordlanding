var express = require("express");
var app = express();

var port = process.env.NODE_ENV === "production" ? 80 : 3000;


app.use('/', express.static('client'));
app.listen(port);