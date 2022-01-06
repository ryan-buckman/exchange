//  initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'Welcome to the exchange api'
    });
});

var newsController = require('../controllers/newsController');
router.route('/news')
    .get(newsController.index);

var quoteController = require('../controllers/quoteController');
router.route('/quote')
    .get(quoteController.index);

var stockSymbolController = require('../controllers/stockSymbolController');
router.route('/stock')
    .get(stockSymbolController.index);


  
// Export API routes
module.exports = router;
