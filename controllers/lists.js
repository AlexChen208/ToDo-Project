const Category = require('../models/category')

module.exports = {
    create
}

function create(req, res) {
    Category.findById(req.params.id, function(err, category) {
        category.lists.push(req.body)
        category.save(function(err) {
            res.redirect(`/categories/${category._id}`)
        })
    })
}