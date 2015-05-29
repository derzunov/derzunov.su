/**
 * Created by Erzunov on 24.04.2015.
 */
var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
	console.log('Express server listening on port 3000');
});