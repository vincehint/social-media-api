const mongoose = require('../db/connection')

const options = { 
    timestamps: true,
    toJSON: { 
        virtuals: true,
        transform: (_doc, userDocToReturn) => {
            delete userDocToReturn.password
            return userDocToReturn
        }
    },
}

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: String,
    birthdate: String,
    location: String,
    about: String,
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    photo: String
}, options)

module.exports = mongoose.model('User', userSchema)
