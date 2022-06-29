const express = require('express')
const router = express.Router()

const listCtrl = require('../controllers/lists')

router.post('/categories/:id/lists', listCtrl.create)

module.exports = router