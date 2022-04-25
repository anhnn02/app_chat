import Message from "../models/message"

export const create = async (req, res) => {
    try {
        const message = await new Message(req.body).save()
        res.json(message)
    } catch (error) {
        res.status(400).json({ message: "Không gửi được tin nhắn mới" })
    }
}

export const list = async (req, res) => {
    try {
        const message = await Message.find({}).populate("id_user").populate("id_room")
        res.json(message)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Không lấy được danh sách tin nhắn" })
    }
}

export const getOne = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const message = await Message.findOne(id);
        res.json(message)
    } catch (error) {
        res.status(400).json({ message: "Không tìm được tin nhắn" })
    }
}

export const remove = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const message = await Message.findOneAndDelete(id)
        res.json(message)
    } catch (error) {
        res.status(400).json({ message: "Không xóa được tin nhắn" })
    }
}

export const update = async (req, res) => {
    const id = { _id: req.params.id }
    const data = req.body
    try {
        const message = await Message.findOneAndUpdate(id, data)
        res.json(roomessagem)
    } catch (error) {
        res.status(400).json({ message: "Không cập nhật được tin nhắn" })
    }
}