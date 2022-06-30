const Category = require('../models/category')

module.exports = {
    create,
    delete: deleteToDo,
}

function create(req, res) {
    Category.findById(req.params.id, function(err, category) {
        category.lists.push(req.body)
        category.save(function(err) {
            res.redirect(`/categories/${category._id}`)
        })
    })
}

function deleteToDo(req, res) {
    // Find list item inside category 
    List.findByIdAndDelete(req.params.id, function(err, lists) {
        res.redirect(`/categories/${category._id}`)
    })
}