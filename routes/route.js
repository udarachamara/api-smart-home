var express = require('express'),
    router = express.Router();

var userController = require('../controllers/user.controller')

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)

module.exports = router;