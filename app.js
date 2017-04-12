// Load the http module to create an http server.
const http = require('http');
// Load the fs module to use the filesystem
const fs = require('fs');

const dtUtil = require('./DateTimeUtil.js');

// The port to listen on (tcp)
const PORT = process.env.PORT;
const LOGEXTENSION = '.log';
const LOGFILE = dtUtil.getSortableDate() + LOGEXTENSION;

// Configure our HTTP server to respond with Hello World to all requests.
let server = http.createServer(function (req, res) {
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    let logMessage = dtUtil.getSortableDateTime() + ' ' + ip + '\n';

    let filename = dtUtil.getSortableDate() + LOGEXTENSION;

    fs.appendFile(LOGFILE, logMessage, encoding = 'utf8', function (err) {
        if (err) throw err;
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n'+logMessage);
});

// Listen on $PORT
server.listen(PORT);

const startupMessage = `${dtUtil.getSortableDateTime()} Server running at port ${PORT}\n`;

// Put a friendly message on the terminal
console.log(startupMessage);

// write message in log
fs.appendFile(LOGFILE, startupMessage, encoding = 'utf8', function (err) {
    if (err) throw err;
});
