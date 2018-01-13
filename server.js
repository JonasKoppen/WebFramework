const express = require('express');
const bodyParser = require('body-parser');

const hostname = '192.168.1.47';
const port = 3000;

const server = express();


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server.use(express.static(__dirname + '/dist'));
//server.use('/assets', express.static(__dirname+'/dist/src/app/assets'));
//server.get()

//Uitbreiding game

