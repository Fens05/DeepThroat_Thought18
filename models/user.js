const { Schema, model} = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
    userName: {
        type: String,
        unique: true,
        required: 'Please list username.',
        trim: true,
     },
     email: {
         type: String,
         unique: true,
         required:'Please submit an emial.',
         match: [],
     },
     thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
     ],
    
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);


UserSchema.virtual('friendCount').get(function() {
   return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;