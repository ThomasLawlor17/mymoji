const express = require('express')
const router = express.Router()
const communityCtrl = require('../../controllers/api/community')

router.get('/', communityCtrl.emojiIndex)



module.exports = router