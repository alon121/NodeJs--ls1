var http = require("http");
var server = http.createServer(
    (req, resp) => {
        resp.writeHead(200, { "content-type": "text/html" });
        var arr = [
            [4, 4],
            [5, 5],
            [6, 5],
            [7, 5]

        ];
        arr.forEach(element => {
            resp.write(`<h1> ${element[0]+element[1]}  </h1>`);
        })

        resp.end();

    }

);
server.listen(4300);