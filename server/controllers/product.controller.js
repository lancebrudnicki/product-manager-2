
const Product = require('../models/product.model');


module.exports = {
    createProduct: (req,res) =>{
        Product.create(req.body)
        .then(product => res.json({result:product}))
        .catch(err => res.json(err.errors))
    },
    showOne: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(data => res.json({ results: data }))
        .catch(err => res.json(err.errors))
    },
    showAll: (req, res) => {
        Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err));
    }
}


// module.exports.createProduct =(request, response) => {
//     console.log(request)
//     // console.log(request.body)
//     Product.create(request.body)
//         .then(product => response.json(product))
//         .catch(err => response.json(err))
// }

// module.exports.findOne =(req, res) => {
//     Product.findOne({_id: req.params.id})
//     .then(product => res.json(product))
//     .catch(err => res.json(err.errors))
// }

module.exports.index =(req, response) => {
    response.json({
        message: "hello world"
    });
}

