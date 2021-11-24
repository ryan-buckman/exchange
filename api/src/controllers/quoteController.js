const { pipeline } = require('stream');
const got = require('got');
const config = require('../../config/config');

exports.index = function (req, res) {
    const symbol= req.query.symbol;
    const dataStream = got.stream({
        url: 'https://finnhub.io/api/v1/quote',
        searchParams: { symbol },
        headers:{
            'X-Finnhub-Token': config.finnhub.token
        }
    });
    pipeline(dataStream, res, (err) => {
        if (err) {
            res.sendStatus(500);
        }
    });
};