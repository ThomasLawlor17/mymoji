const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')

// POST /api/users/signup
router.post('/signup', usersCtrl.signup);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// PUT /api/users/:id/adddl
// router.put('/:id/adddl', usersCtrl.addDL)

module.exports = router;
