import { type } from 'express/lib/response';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isOnline: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })


const UserModel = mongoose.model('User', userSchema);

export default UserModel;

