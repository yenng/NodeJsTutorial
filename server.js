var express = require('express');

var app = express();

var server = app.listen(3000,() => {
	console.log('Server is running on port', server.address().port);
});

app.use(express.static(__dirname));