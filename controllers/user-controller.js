const { User } = require('../models');
const userController = {

    getAllUsers(req, res) {
        User.find({})
            .then((dbUserDta) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
        
    },
    //user with friend data
    getUserById({ params}, res){
        User.findOne({ _id: params.id})
        .populate({
            path:'thought',
            path: 'friend',
            select:'-_-v',
        })
        .then((dbUserDtat) => {
            if(!dbUserData){
                res.json(404).json({messate:'User not found with Id!'});
                return;
            }
            res.json(dbUserData);

        })
        .catch((err) =>{
            console.log(wrr);
            res.status(400).json(err);
        });
    }
};

module.exports = userController;