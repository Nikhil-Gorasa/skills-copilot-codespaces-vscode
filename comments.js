//create web server
const http = require('http');
//create web server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>This is a web server</h1>');
});
//listen to port 3000
server.listen(3000);
console.log('Server is running at http://localhost:3000');