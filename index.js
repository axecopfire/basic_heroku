var http = require("http");

http.createServer(function (req, res) {
	res.end("Server connected")
})
	.listen(443, function() {
		console.log("Connected");
	});