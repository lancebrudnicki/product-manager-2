const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/product/new', ProductController.createProduct)
    // app.get('/api', ProductController.index)
    app.get('/api/product/:id', ProductController.showOne)
    app.get('/api/showall', ProductController.showAll)
}

