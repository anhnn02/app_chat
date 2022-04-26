import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const Chat = ({addMessage }) => {
    const {id} = useParams()
    const [reRenderChat, setReRenderChat] = useState([])
    const [message, setMessage] = useState([])
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (dataMessage) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            const message = {
                content: dataMessage.content,
                status: true,
                id_user: user.user._id,
                id_room: id
            }
            try {
                const { data } = await axios.post("http://localhost:8000/api/message", message)
                setReRenderChat(data)
            } catch (error) {
                alert(error.response.data.message);
            }
        } else {
            alert("Ban chua dang nhap tai khoan")
        }
        reset({
            content: ""
        })
    }

    useEffect(() => {
        const getMessageOnRoom = async () => {
           try {
               const { data } = await axios.get(`http://localhost:8000/api/room/${id}`)
               setMessage(data.message)
           } catch (error) {
            console.log("ChatJSX", errors);
           }
        }
        getMessageOnRoom()
        console.log(message);
    }, [reRenderChat])
    return (
        <div>
            <div className="border">
                <div className="">
                    { message && message.length > 0 && message.map((item) => (
                        <div className="" key={item._id}>{item.id_user}: {item.content }</div>
                    )) }
                </div>
            </div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <input type="text" { ...register("content", { required: true }) } />
                { errors.content && <span>Vui long nhap tin nhan</span> }
                <div><button>Gửi</button></div>
            </form>
        </div>
    )
}
export default Chat