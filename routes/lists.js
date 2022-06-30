const express = require('express')
const router = express.Router()

const listCtrl = require('../controllers/lists')

router.post('/categories/:id/lists', listCtrl.create)
router.delete('/categories/:id/lists/:listId', listCtrl.delete)
module.exports = router