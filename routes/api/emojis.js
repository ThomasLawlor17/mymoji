const express = require('express')
const router = express.Router()
const emojisCtrl = require('../../controllers/api/emojis')

// GET /api/emojis/new
router.get('/new', emojisCtrl.new)

module.exports = router