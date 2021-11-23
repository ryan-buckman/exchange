const { pipeline } = require('stream');
const got = require('got');
const config = require('../../configuration/config');

exports.index = function (req, res) {
    const category= req.query.category;
    const dataStream = got.stream({
        url: 'https://finnhub.io/api/v1/news',
        searchParams: { category },
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

