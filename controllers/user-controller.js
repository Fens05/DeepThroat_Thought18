const { User } = require('../models');


function getAllUsers(req, res) {
    User.find({})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    
}

function getUserById({ params}, res){
    User.findOne({ _id: params.id})
    .populate({
        path:'thought',
        path: 'friend',
        select:'-_-v',
    })
    .then((dbUserData) => {
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

const userController = { 
    getAllUsers, getUserById
};


module.exports = userController;