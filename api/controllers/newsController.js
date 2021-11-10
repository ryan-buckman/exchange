const { pipeline } = require('stream');
const got = require('got');
const config = require('../configuration/config');

// Handle index actions
exports.index = function (req, res) {
    const dataStream = got.stream({
        url: 'https://finnhub.io/api/v1/news?category=general',
        headers:{
            'X-Finnhub-Token': config.finnhub.token
        }
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
};