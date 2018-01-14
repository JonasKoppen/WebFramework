const express = require('express');

const hostname = '127.0.0.1';
const port = 3005;

const server = express();

let apiRouter = express.Router();

server.use('/api', apiRouter);

//server.use(express.static(__dirname + '/dist'));
//server.use('/assets', express.static(__dirname+'/dist/src/app/assets'));
//server.get()

//Uitbreiding game

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});