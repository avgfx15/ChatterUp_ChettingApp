import { type } from 'express/lib/response';
import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });


const ChatModel = mongoose.model('Chat', chatSchema);

export default ChatModel;