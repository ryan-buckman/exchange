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
var port = process.env.PORT || 8080;

// use api routes
app.use('/api', apiRoutes)

// launch app to listen to specified port
app.listen(port, function () {
    console.log("server listening on port " + port);
});