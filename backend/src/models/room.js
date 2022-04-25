import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export default mongoose.model('Room', roomSchema)