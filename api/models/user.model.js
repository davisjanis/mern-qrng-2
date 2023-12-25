import mongoose from 'mongoose';

// create schema, what are rules and conditions for user model

const userSchema = new mongoose.Schema({
    username:{ 
        type: String,
        required: true,
        unique: true,
    },
    email:{ 
        type: String,
        required: true,
        unique: true,
    },
    password:{ 
        type: String,
        required: true,
    },

}, {timestamps: true});
// create a model

const User = mongoose.model('User', userSchema)

export default User;