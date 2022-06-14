const express = require('express')
const router = express.Router()
const partsCtrl = require('../../controllers/api/parts')

// GET /api/parts
router.get('/', partsCtrl.index)


module.exports = router