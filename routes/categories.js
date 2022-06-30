var express = require('express');
var router = express.Router();
const categoriesCtrl = require('../controllers/categories')
const isLoggedIn = require('../config/auth')

// All starts with /categories
// create new form page
router.get('/new', categoriesCtrl.new)
// route to index page
router.get('/',  isLoggedIn, categoriesCtrl.index)
// route to specific category
router.get('/:id', isLoggedIn, categoriesCtrl.show)
// route to add data to home page
router.post('/', isLoggedIn, categoriesCtrl.create)
// route to delete
router.delete('/:id', categoriesCtrl.delete)
// route to edit
router.get('/:id/edit', isLoggedIn, categoriesCtrl.edit)
// update route
router.put('/:id', categoriesCtrl.update)

module.exports = router;