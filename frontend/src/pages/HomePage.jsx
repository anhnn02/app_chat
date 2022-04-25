import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to="/login">Đăng Nhập</Link>
            <Link to="/chat">Chat</Link>
        </div>
    )
}

export default HomePage