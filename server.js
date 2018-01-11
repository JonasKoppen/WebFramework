const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId
const bodyParser = require("body-parser");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = express();

var db;

//connect to mongoDB
mongoClient.connect(`mongodb://${hostname}:27017/myproject2`, (err, _db) =>{
    if (err != null)
    {
        console.log(err.message);
        throw err;
    }
    db = _db
    console.log("connected to the Mongo DataBase");
})

let apiRouter = express.Router();

//static files in the dist map
server.use(express.static(path.join(__dirname, 'dist')));

server.use(bodyParser.json());
server.use('/api', apiRouter);

server.use(bodyParser.json());
server.use('/api', apiRouter);

apiRouter.route('/game')
.get((req, res) => {
    //Select
    let query = req.query;
    //haal de eerste 10 scores op , oplopend gesorteerd volgens 'attempts' (aantal pogingen)
    db.collection("game").find(query).sort({attempts : 1}).limit(10).toArray((err, games) => {
        if (err != null)
        {
            res.statusCode("500");
            return;
        }
        res.json(games);
    })
})
.post((req,res) => {
    //Insert
    let request = req;
    db.collection("game").insert(req.body, (err, result) => {
        //Geef de toegevoegde score terug als response
        res.json(result.ops[0]);
    })
})


server.listen(port,hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});