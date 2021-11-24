require('dotenv').config()
const debug =require('debug')('server:debug');

const config = require('config');

const express = require('express')

const bodyParser = require('body-parser');

const cors = require('cors');

let apiRoutes = require("./routes/api-routes")

// init the app
let app = express();
app.use(cors())

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());


// use api routes
app.use('/api', apiRoutes);

// launch app to listen to specified port
const server = app.listen(config.get('port'),()=>{
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
})

 module.exports= app;
 module.exports.port= server.address().port