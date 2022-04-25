import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types

const messageSchema = new Schema({
    status: {
        type: Boolean,
    },
    content: {
        type: String,
        required: true
    },
    id_room: {
        type: ObjectId,
        ref: "Room"
    },
    id_user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export default mongoose.model('Message', messageSchema)