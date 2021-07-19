const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productmanager2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('database connection established'))
.catch(err=>console.log('good try', err))