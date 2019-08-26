var http = require("http");

http.createServer(function (req, res) {
	res.end("Server connected")
})
	.listen(process.env.PORT || 3000);