import Room from "../models/room"
import Message from "../models/message"

export const create = async (req, res) => {
    try {
        const room = await new Room(req.body).save()
        res.json(room)
    } catch (error) {
        res.status(400).json({ message: "Không tạo được Room" })
    }
}

export const getMessageOnRoom = async (req, res) => {
    try {
        const room = await Room.findOne({_id: req.params.id}).exec()
        const message = await Message.find({ id_room: room._id }).select('-id_room').exec()
        res.json({room, message})
    } catch (error) {
        res.status(400).json({ message: "Không lấy được sách Message thuoc Room" }) 
    }
}

export const list = async (req, res) => {
    try {
        const room = await Room.find({}).populate("user_id").sort({ "createdAt": -1 })
        res.json(room)
    } catch (error) {
        res.status(400).json({ message: "Không lấy được sách Room" })
    }
}

export const getOne = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const room = await Room.findOne(id);
        res.json(room)
    } catch (error) {
        res.status(400).json({ message: "Không tìm được Room" })
    }
}

export const remove = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const room = await Room.findOneAndDelete(id)
        res.json(room)
    } catch (error) {
        res.status(400).json({ message: "Không xóa được room" })
    }
}

export const update = async (req, res) => {
    const id = { _id: req.params.id }
    const data = req.body
    try {
        const room = await Room.findOneAndUpdate(id, data)
        res.json(room)
    } catch (error) {
        res.status(400).json({ message: "Không cập nhật Room" })
    }
}