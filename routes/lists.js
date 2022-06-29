const express = require('express')
const router = express.Router()

const listCtrl = require('../controllers/lists')

router.post('/categories/:id/destinations', listCtrl.create)

module.exports = router