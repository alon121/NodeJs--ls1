var http = require("http");


var server = http.createServer(
        (req, resp) => {
            var arr = [
                [3, 5],
                [5, 5]
            ];
            resp.writeHead(200, { "Content-type": "text/html" });
            arr.forEach(function(element, i) {
                    resp.write(element[0] + element[1]);
                }

                resp.end();
            }

        )

        function Add(num1, num2) {
            return num1 + num2;
        }

        function Mul(num1, num2) {
            let sum = 0;
            for (let i = 0; i <= num2; i++) {
                sum = add(sum, num2);
            }
        }
        var myArr = [
            [4, 3],
            [4, 5],
            [6, 6]
        ];

        function calcArray(arr) {
            arr.forEach(function(element, i) {
                    console.log(Add(element[0], element[1]));
                }

            );
        }
        calcArray(myArr);

        server.listen(3333);