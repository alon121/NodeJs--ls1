
var http = require("http");
var server = http.createServer(
    (req, resp) => {
        resp.writeHead(200, { "content-Type": "text/html" });
        resp.write("<html><body><h1> Hello from server</h1> </body></html>");
        resp.end();
    }
)
server.listen(4300);
console.log("server is running");
