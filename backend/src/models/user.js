import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    },
    onl_status: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema)