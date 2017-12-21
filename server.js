import { retry } from 'rxjs/operator/retry';

const express = require('express');
const bodyParser = require('body-parser');

const hostname = '192.168.1.40';
const port = 3000;

const server = express();


let apiRouter = express.Router();

server.use(bodyParser.json());
server.use('/api', apiRouter);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server.use(express.static(__dirname + '/dist'));
//server.use('/assets', express.static(__dirname+'/dist/src/app/assets'));
//server.get()

//Uitbreiding game

