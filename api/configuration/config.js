var config = {};

config.finnhub = {};
config.finnhub.token = process.env.API_Key || 'my-api-token';
config.port = process.env.port || 8080;


module.exports = config;
