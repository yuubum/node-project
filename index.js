const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {

});

server.listen(3000, () => {
    console.log('Server is running!');
});