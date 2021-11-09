//  initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'Welcome to the exchange api'
    });
});

// Export API routes
module.exports = router;