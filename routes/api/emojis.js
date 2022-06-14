const express = require('express')
const router = express.Router()
const emojisCtrl = require('../../controllers/api/emojis')

// GET /api/emojis
router.get('/', emojisCtrl.index)



// GET /api/emojis/layers
router.get('/layers', emojisCtrl.layers)

// POST /api/eomijs/layers/part/:id
router.post('/layers/part/:id', emojisCtrl.addToLayers)

// POST /api/emojis/save
router.post('/save', emojisCtrl.saveEmoji)
// GET /api/emojis/layers
router.get('/:id/layers', emojisCtrl.layersIndex)

module.exports = router