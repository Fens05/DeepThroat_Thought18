const { User } = require('../models');
const userController = {

    getAllUsers(req, res) {
        User.find({})
    }
};

module.exports = userController;