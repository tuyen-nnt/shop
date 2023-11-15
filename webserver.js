// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
// var http = require('http');
// let indexFile;
// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.write(indexFile)
//     res.end(indexFile);
// };
// const fs = require('fs').promises;
// const server = http.createServer(requestListener)
//     // .listen(5501,'127.0.0.1');
//
// fs.readFile("/home/misen/Downloads/startbootstrap-shop/index.html")
//     .then(contents => {
//         indexFile = contents;
//         server.listen('127.0.0.1', 5502, () => {
//             console.log(`Server is running on http`);
//         });
//     });
//


var http =  require('http')
var fs = require('fs')

const PORT = 5501

fs.readFile('/home/misen/Downloads/startbootstrap-shop/index.html', function(error, html) {
    if(error) throw error;
    http.createServer(function (request, response) {
        if(req.url === "/"){
            //send html here
            response.writeHeader(200, "Content-Type", "text/html");
            response.write(html)


        }else if(req.url.match("\.css$")){
            //send css here
            response.writeHeader(200, {'Content-Type': 'text/css'});
            response.write(html)
        }
        response.write(html)
        response.end();
    }).listen(PORT, '127.0.0.1')

    console.log('Successfully start server on ' + PORT)
});

function css(request, response) {
    if (request.url === '/styles.css') {
        response.writeHead(200, {'Content-type' : 'text/css'});
        var fileContents = fs.readFileSync('./views/styles.css', {encoding: 'utf8'});
        response.write(fileContents);
    }
}

// https://github.com/gorgorgordon/node_css_demo/blob/master/app.js
