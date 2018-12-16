var http = require("http");
var server = http.createServer(
    (req, resp) => {
        resp.writeHead(200, { "Content-type": "text/html" });
        resp.write("<b> hi</b>");
        resp.end();
    }
)
server.listen(2000);