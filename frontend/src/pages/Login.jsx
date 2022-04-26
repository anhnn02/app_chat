import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (dataUser) => {
        try {
            const { data } = await axios.post("http://localhost:8000/api/login", dataUser)
            localStorage.setItem("user", JSON.stringify(data))
            alert("Đăng nhập thành công")
            navigate("/room")
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <form action="" onSubmit={ handleSubmit(onSubmit) }>
                <h2>Đăng Nhập Account</h2>
                <div className="">
                    <label >Account</label>
                    <input type="text"  { ...register("account", { required: true }) } />
                </div>
                <div className="">
                    <label >Password</label>
                    <input type="password" { ...register("password", { required: true }) } />
                </div>
                <button>Đăng Nhập</button>
            </form>
        </div>
    )
}

export default Login