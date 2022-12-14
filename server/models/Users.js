const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    googleId: {
        type: String
    },
    likedQuizzes: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    avatar: {
        type: Object,
        required: false,
        contains: {
            url: {
                type: String
            },
            publicId: {
                type: String
            }
        }
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

module.exports = User = mongoose.model('Users', UserSchema);

