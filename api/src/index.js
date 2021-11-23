require('dotenv').config()

const config = require('../configuration/config');

let express = require('express')

let bodyParser = require('body-parser');

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

// setup server port
var port = config.port

// use api routes
app.use('/api', apiRoutes);

// launch app to listen to specified port
const server = app.listen(port, () => {
    console.log('Express listening at ', server.address().port);
});

module.exports= app;
module.exports.port=server.address().port