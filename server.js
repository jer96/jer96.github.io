const express = require('express');
const app = express();
app.use(express.static('./'));

var server = app.listen(8000, function (err) {
	if (err) {
		console.log(err);
	}
	console.log('server started');
});

