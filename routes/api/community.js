const express = require('express')
const router = express.Router()
const communityCtrl = require('../../controllers/api/community')

// GET /api/community/shared
router.get('/shared', communityCtrl.indexShared)
//GET /api/community/users
router.get('/users', communityCtrl.indexUsers)


module.exports = router