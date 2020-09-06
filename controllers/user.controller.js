let userService = require('../services/user.service')

exports.getUsers = async function(req, res) {
    return await userService.getUsers(req, res)
}

exports.getUser = async function(req, res) {
    return await userService.getUser(req, res)
}