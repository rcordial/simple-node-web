require('dotenv').config();
const http = require('http');
const os = require('os');

const name = process.env.NAME || 'node';
const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(`Hello from ${name} :  ${os.hostname()} : ${os.platform()}`);
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port ${port}`);
});