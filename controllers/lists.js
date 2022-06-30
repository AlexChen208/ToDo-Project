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

async function deleteToDo(req, res, next) {
    try {
        const category = await Category.findById(req.params.id)
        console.log('CATEGORY', category)
        if (!category) return res.redirect('/categories')
        let list = category.lists.id(req.params.listId)
        console.log('LIST', list)
        category.lists.remove(list)
        await category.save()
        res.redirect(`/categories/${category._id}`)
    } catch(err) {
        return next(err)
    }
}