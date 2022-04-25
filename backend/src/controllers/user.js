import User from "../models/user"

export const register = async (req, res) => {
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Không đăng ký được nick" })
    }
}

export const login = async (req, res) => {
    const { account, password } = req.body
    try {
        const user = await User.findOne({ account }).exec()
        if (!user) {
            res.status(400).json({ message: "Không tồn tại account này" })
        }
        if (user.password !== password) {
            res.status(400).json({ message: "Mật khẩu Account không đúng" })
        }
        res.json({
            user: {
                _id: user._id,
                account: user.account,
                name: user.name,
                role: user.role,
                onl_status: user.onl_status
            }
        })
    } catch (error) {
        res.status(400).json({ message: "Đăng nhập thất bại" })
    }
}


export const list = async (req, res) => {
    try {
        const user = await User.find({})
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Không lấy được sách tài khoản" })
    }
}

export const getOne = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const user = await User.findOne(id);
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Không lấy tài khoản cần tìm" })
    }
}

export const remove = async (req, res) => {
    const id = { _id: req.params.id }
    try {
        const user = await User.findOneAndDelete(id)
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Không xóa được tài khoản" })
    }
}

export const update = async (req, res) => {
    const id = { _id: req.params.id }
    const data = req.body
    try {
        const user = await User.findOneAndUpdate(id, data)
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: "Không cập nhật được tài khoản" })
    }
}