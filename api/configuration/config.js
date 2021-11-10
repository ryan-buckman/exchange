var config = {};

config.finnhub = {};
config.finnhub.token = process.env.API_Key || 'my-api-token';

module.exports = config;
