const router = require('express').Router();
const { 
  getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFrind
} = require('../../controllers/user-controller');


//APIs
router
  .route('/')
  .get(getAllUsers)
  

//userId
router
    .route('/:userId')
    .get(getUserById)
    // .put(updateUser)
    // .delete(deleteUser);

//friends
router
    .route('/:userId/friends/:friendId')
    // .put(addFriend)
    // .delete(deleteFriend);

   


module.exports = router;