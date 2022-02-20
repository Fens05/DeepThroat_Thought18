const { Schema } = require("mongoose");

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
         required:'Please submit an emial',
         match: [/.+@.+\..+/],
     },
     thoughts: [
         {
             type: Schema.Types.ObjectId,
             ref: 'Thought',

         },
     ],
``
     friends: [
         {
             type: Schema.Types.ObjectId,
             re: 'Use'
         },
     ],

    },

)