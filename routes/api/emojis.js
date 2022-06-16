const express = require('express')
const router = express.Router()
const emojisCtrl = require('../../controllers/api/emojis')

// GET /api/emojis
router.get('/user', emojisCtrl.profileIndex)



// GET /api/emojis/layers
// router.get('/layers', emojisCtrl.layers)

// POST /api/eomijs/layers/part/:id
router.post('/layers/part/:id', emojisCtrl.addToLayers)
// DELETE /api/emojis/layers/part/:id/remove
router.delete('/layers/:id/remove', emojisCtrl.removeLayer)

// POST /api/emojis/save
router.post('/save', emojisCtrl.saveEmoji)
// GET /api/emojis/layers
router.get('/layers', emojisCtrl.layersIndex)
// PUT /api/emojis/share
router.put('/share', emojisCtrl.shareEmoji)
// PUT /api/emojis/name
router.put('/name', emojisCtrl.changeName)
// PUT /api/emojis/layers/:id/order/up
router.put('/layers/:id/order/up', emojisCtrl.layerUp)
// PUT /api/emojis/layers/:id/order/down
router.put('/layers/:id/order/down', emojisCtrl.layerDown)

module.exports = router